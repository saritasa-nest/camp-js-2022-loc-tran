import { HttpParams } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationParamsMapper } from '@js-camp/core/mappers/paginationParams.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';
import { PaginationParams } from '@js-camp/core/models/paginationParams';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import {
  BehaviorSubject,
  debounceTime,
  map,
  merge,
  Observable,
  shareReplay,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { NavigateService } from '../../../../core/services/navigate.service';

import { ConfirmModalComponent } from '../../../../shared/components/confirm-modal/confirm-modal.component';

import { AnimeService } from '../../../../core/services/anime.service';

const DEFAULT_PARAMS = new PaginationParams({
  ordering: '',
  page: 0,
  limit: 25,
  sorting: '',
  type: '',
  search: '',
});

/** Specify order type for sort option. */
enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

/** Column titles of anime table.*/
const COLUMN_TITLES = [
  'Image',
  'Title English',
  'Title Japanese',
  'Aired start',
  'Type',
  'Status',
  'Option',
];

const FILTER_TYPES = ['TV', 'OVA', 'MOVIE', 'SPECIAL', 'ONA', 'MUSIC'];

/** Anime table. */
@UntilDestroy()
@Component({
  selector: 'camp-anime-table',
  templateUrl: './anime-table.component.html',
  styleUrls: ['./anime-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeTableComponent implements OnDestroy, OnInit {
  /** Filter options. */
  protected readonly filterTypes = FILTER_TYPES;

  /** Column title of anime table. */
  protected readonly columnTitles = COLUMN_TITLES;

  /** Anime data. */
  protected readonly paginationAnime$: Observable<Pagination<Anime>>;

  /** Form control for search form. */
  protected readonly searchControl = new FormControl<string>('');

  /** Form control for filter by type. */
  protected readonly filterControl = new FormControl<readonly string[]>([]);

  /** This stream emit latest query params and trigger side effect.*/
  protected readonly queryParams$: Observable<PaginationParams>;

  /** Subject that is used for unsubscribing from streams. */
  private readonly subscriptionManager$ = new Subject<void>();

  /** Stream for sort direction. */
  protected readonly sortDirection$: Observable<SortDirection>;

  /** A stream for emit new query params. */
  protected readonly queryParamsUpdated$ =
    new BehaviorSubject<PaginationParams>(
      new PaginationParams({
        ...DEFAULT_PARAMS,
        ...this.route.snapshot.queryParams,
      }),
    );

  /** Delete anime by id. */
  private readonly deleteAnime$ = new Subject<number>();

  /** Loading feature. */
  protected readonly isAnimeLoading$ = new BehaviorSubject<boolean>(false);

  public constructor(
    private readonly animeService: AnimeService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly dialog: MatDialog,
    private readonly navigateService: NavigateService,
  ) {
    this.setInitialValues();

    this.paginationAnime$ = this.route.queryParams.pipe(
      switchMap(params => {
        const query = new PaginationParams({
          ...DEFAULT_PARAMS,
          ...params,
        });
        return this.animeService.getAnime(
          new HttpParams({
            fromObject: { ...PaginationParamsMapper.toDto(query) },
          }),
        );
      }),
      shareReplay({ bufferSize: 1, refCount: true }),
    );

    this.queryParams$ = merge(
      this.queryParamsUpdated$,
      this.filterControl.valueChanges.pipe(
        debounceTime(400),
        map(
          value =>
            new PaginationParams({
              ...DEFAULT_PARAMS,
              ...this.route.snapshot.queryParams,
              type: value?.join(',') ?? DEFAULT_PARAMS.type,
            }),
        ),
      ),
      this.searchControl.valueChanges.pipe(
        debounceTime(500),
        map(
          value =>
            new PaginationParams({
              ...DEFAULT_PARAMS,
              search: value ?? DEFAULT_PARAMS.search,
            }),
        ),
      ),
    );

    this.sortDirection$ = this.queryParamsUpdated$.pipe(
      map(params =>
        params.ordering === SortDirection.Descending ?
          SortDirection.Descending :
          SortDirection.Ascending),
    );

    this.deleteAnime$
      .pipe(
        switchMap(animeId =>
          animeService
            .deleteAnimeById(animeId)
            .pipe(tap(() => this.navigateService.reloadPage()))),
        untilDestroyed(this),
      )
      .subscribe();
  }

  /** Initialize data. */
  public ngOnInit(): void {
    const navigateSideEffect$ = this.queryParams$.pipe(
      tap(query => {
        this.navigateService.navigate('/', { ...query });
        this.isAnimeLoading$.next(true);
      }),
    );

    const loadingAnimeSideEffect$ = this.paginationAnime$.pipe(
      tap(() => this.isAnimeLoading$.next(false)),
    );

    merge(navigateSideEffect$, loadingAnimeSideEffect$)
      .pipe(takeUntil(this.subscriptionManager$))
      .subscribe();
  }

  /** Clean side effect streams. */
  public ngOnDestroy(): void {
    this.subscriptionManager$.next();
    this.subscriptionManager$.complete();
  }

  /**
   * Handle change for pagination.
   * @param event Pagination event.
   */
  public handlePaginationChange(event: PageEvent): void {
    this.queryParamsUpdated$.next(
      new PaginationParams({
        ...DEFAULT_PARAMS,
        ...this.route.snapshot.queryParams,
        limit: event.pageSize,
        page: event.pageIndex,
      }),
    );
  }

  /**
   * Send new Params when sort option is changed.
   * @param event Sort event emitted from material select.
   */
  public handleSortChange(event: Sort): void {
    this.queryParamsUpdated$.next(
      new PaginationParams({
        ...DEFAULT_PARAMS,
        ...this.route.snapshot.queryParams,
        ordering: event.direction,
        sorting: event.direction !== '' ? event.active : DEFAULT_PARAMS.sorting,
      }),
    );
  }

  /**
   * Function track by for filter by type.
   * @param type Type of filter.
   */
  public trackByTypeName(type: string): string {
    return type;
  }

  /** Init value for options. */
  public setInitialValues(): void {
    this.filterControl.setValue(
      this.route.snapshot.queryParamMap.get('type')?.split(',') ?? [],
    );
    this.searchControl.setValue(
      this.route.snapshot.queryParamMap.get('search') ?? DEFAULT_PARAMS.search,
    );
  }

  /**
   * Function track by for anime table.
   * @param _index Index of anime.
   * @param anime Data of one anime.
   */
  public trackAnimeById(_index: number, anime: Anime): number {
    return anime.id;
  }

  /**
   * Delete an anime.
   * @param event Click event of delete button.
   * @param animeId Id of anime.
   */
  public onDelete(event: Event, animeId: number): void {
    event.stopPropagation();
    this.dialog.open(ConfirmModalComponent, {
      data: () => {
        this.deleteAnime$.next(animeId);
        this.navigateService.reloadPage();
      },
    });
  }

  public onEdit(event: Event): void {
    event.stopPropagation();
  }
}
