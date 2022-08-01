import { HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationParamsMapper } from '@js-camp/core/mappers/paginationParams.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';
import { PaginationParams } from '@js-camp/core/models/paginationParams';
import {
  BehaviorSubject, debounceTime, map,
  merge,
  Observable, switchMap,
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
export class AnimeTableComponent implements OnDestroy {
  /** Filter options. */
  public readonly filterTypes = FILTER_TYPES;

  /** Column title of anime table. */
  public readonly columnTitles = COLUMN_TITLES;

  /** Anime data response from BE. */
  public readonly paginationAnime$: Observable<Pagination<Anime>>;

  /**  */
  public readonly searchControl = new FormControl();

  /** Query params. */
  public readonly queryParamsUrl$ = new BehaviorSubject<PaginationParams>(
    new PaginationParams({
      ...DEFAULT_PARAMS,
      ...this.route.snapshot.queryParams,
    }),
  );

  /** Redirect subscription. */
  public readonly redirectSubscription;

  /** Number of anime. */
  public length = 0;

  public constructor(
    private readonly animeService: AnimeService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {

    this.redirectSubscription = merge(
      this.queryParamsUrl$,
      this.searchControl.valueChanges.pipe(map(value => new PaginationParams({
        ...DEFAULT_PARAMS,
        ...this.route.snapshot.queryParams,
        search: value,
        page: 0,
      })),
      debounceTime(500)),
    ).subscribe(query => this.router.navigate(['/'], { queryParams: { ...query } }));

    this.paginationAnime$ = this.route.queryParams.pipe(
      switchMap(params => {
        const query = new PaginationParams({
          ...DEFAULT_PARAMS,
          ...params,
        });
        this.queryParamsUrl$.next(query);
        return this.animeService.getAnime(
          new HttpParams({
            fromObject: { ...PaginationParamsMapper.toDto(query) },
          }),
        );
      }),
      tap(pagination => {
        this.length = pagination.count;
      }),
    );
  }

  /** */
  public ngOnDestroy(): void {
    this.redirectSubscription.unsubscribe();
  }

  /**
   * Handle change for pagination.
   * @param event Pagination event.
   */
  public handlePaginationChange(event: PageEvent): void {
    this.queryParamsUrl$.next(new PaginationParams({
      ...DEFAULT_PARAMS,
      ...this.route.snapshot.queryParams,
      limit: event.pageSize,
      page: event.pageIndex,
    }));
  }

  /**
   *
   * @param event Sort event emitted from material select.
   */
  public handleSortChange(event: Sort): void {
    this.queryParamsUrl$.next(new PaginationParams({
      ...DEFAULT_PARAMS,
      ...this.route.snapshot.queryParams,
      ordering: event.direction,
      sorting: event.direction !== '' ? event.active : '',
    }));
  }

  /**
   * Get filter option and apply new anime data.
   * @param event Filter event emitted from material select.
   */
  public handleFilterChange(event: string[]): void {
    this.queryParamsUrl$.next(new PaginationParams({
      ...DEFAULT_PARAMS,
      ...this.route.snapshot.queryParams,
      type: event.join(','),
    }));
  }
}
