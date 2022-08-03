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
];

const FILTER_TYPES = ['TV', 'OVA', 'MOVIE', 'SPECIAL', 'ONA', 'MUSIC'];

/** Anime table. */
@Component({
  selector: 'camp-anime-table',
  templateUrl: './anime-table.component.html',
  styleUrls: ['./anime-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeTableComponent implements OnDestroy, OnInit {
  /** Sort direction enum for anime table. */
  public readonly sortDirection = SortDirection;

  /** Filter options. */
  public readonly filterTypes = FILTER_TYPES;

  /** Column title of anime table. */
  public readonly columnTitles = COLUMN_TITLES;

  /** Anime data response from BE. */
  public readonly paginationAnime$: Observable<Pagination<Anime>>;

  /** Form control for search form. */
  public readonly searchControl = new FormControl<string>('');

  /** Form control for filter by type. */
  public readonly filterControl = new FormControl<readonly string[]>([]);

  /** This stream emit latest query params and trigger side effect.*/
  public readonly queryParams$: Observable<PaginationParams>;

  /** Subject that is used for unsubscribing from streams. */
  private readonly subscriptionManager$ = new Subject<void>();

  /** A stream for emit new query params. */
  public readonly queryParamsUpdated$ = new BehaviorSubject<PaginationParams>(
    new PaginationParams({
      ...DEFAULT_PARAMS,
      ...this.route.snapshot.queryParams,
    }),
  );

  /** Loading feature. */
  public readonly isAnimeLoading$ = new BehaviorSubject<boolean>(false);

  public constructor(
    private readonly animeService: AnimeService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.setInitialValues();

    this.paginationAnime$ = this.route.queryParams.pipe(
      switchMap(params => {
        const query = new PaginationParams({
          ...DEFAULT_PARAMS,
          ...params,
        });
        return this.animeService.getAnime(new HttpParams({
          fromObject: { ...PaginationParamsMapper.toDto(query) },
        }));
      }),
      shareReplay({ bufferSize: 1, refCount: true }),
    );

    this.queryParams$ = merge(
      this.queryParamsUpdated$,
      this.filterControl.valueChanges.pipe(
        debounceTime(400),
        map(value => new PaginationParams({
          ...DEFAULT_PARAMS,
          ...this.route.snapshot.queryParams,
          type: value?.join(',') ?? DEFAULT_PARAMS.type,
        })),
      ),
      this.searchControl.valueChanges.pipe(
        debounceTime(500),
        map(value => new PaginationParams({
          ...DEFAULT_PARAMS,
          search: value ?? DEFAULT_PARAMS.search,
        })),
      ),
    );
  }

  /** Initialize data. */
  public ngOnInit(): void {
    const navigateSideEffect$ = this.queryParams$.pipe(
      tap(query => {
        this.router.navigate(['/'], { queryParams: { ...query } });
        this.isAnimeLoading$.next(true);
      }),
    );

    const loadingAnimeSideEffect$ = this.paginationAnime$.pipe(tap(() => this.isAnimeLoading$.next(false)));

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
        sorting: event.direction ? event.active : DEFAULT_PARAMS.sorting,
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
}
