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
  finalize,
  map,
  merge,
  Observable,
  startWith,
  Subscription,
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
  /** */
  public readonly sortDirection = SortDirection;

  /** Filter options. */
  public readonly filterTypes = FILTER_TYPES;

  /** Column title of anime table. */
  public readonly columnTitles = COLUMN_TITLES;

  /** Anime data response from BE. */
  public readonly paginationAnime$: Observable<Pagination<Anime> | null>;

  /** Form control for search form. */
  public readonly searchControl = new FormControl<string>('');

  /** Form control for filter by type. */
  public readonly filterControl = new FormControl<readonly string[]>([]);

  public readonly queryParam$: Observable<PaginationParams>;

  private readonly subscriptionManager$ = new Subject<void>();

  /** Query params. */
  public readonly queryParamsUrl$ = new BehaviorSubject<PaginationParams>(
    new PaginationParams({
      ...DEFAULT_PARAMS,
      ...this.route.snapshot.queryParams,
    }),
  );

  /** Loading feature. */
  public readonly isLoading$ = new BehaviorSubject<Boolean>(false);

  /** Redirect subscription. */
  public redirectSubscription = new Subscription();

  /** Number of anime. */
  public length = 0;

  public constructor(
    private readonly animeService: AnimeService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.filterControl.setValue(
      this.route.snapshot.queryParamMap.get('type')?.split(',') ?? [],
    );
    this.searchControl.setValue(
      this.route.snapshot.queryParamMap.get('search') ?? DEFAULT_PARAMS.search,
    );
    this.paginationAnime$ = this.route.queryParams.pipe(
      tap(() => this.isLoading$.next(true)),
      switchMap(params => {
        const query = new PaginationParams({
          ...DEFAULT_PARAMS,
          ...params,
        });
        return this.animeService
          .getAnime(
            new HttpParams({
              fromObject: { ...PaginationParamsMapper.toDto(query) },
            }),
          )
          .pipe(startWith(null));
      }),
      tap(pagination => {
        if (pagination) {
          this.length = pagination.count;
        }
      }),
      finalize(() => {
        this.isLoading$.next(false);
      }),
    );

    this.queryParam$ = merge(
      this.queryParamsUrl$,
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
  }

  /** Initialize data. */
  public ngOnInit(): void {
    const navigateSideEffect$ = this.queryParam$.pipe(
      tap(query => {
        this.router.navigate(['/'], { queryParams: { ...query } });
      }),
    );

    merge(navigateSideEffect$)
      .pipe(takeUntil(this.subscriptionManager$))
      .subscribe();
  }

  /** Clean data. */
  public ngOnDestroy(): void {
    this.subscriptionManager$.next();
    this.subscriptionManager$.complete();
  }

  /**
   * Handle change for pagination.
   * @param event Pagination event.
   */
  public handlePaginationChange(event: PageEvent): void {
    this.queryParamsUrl$.next(
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
    this.queryParamsUrl$.next(
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
}
