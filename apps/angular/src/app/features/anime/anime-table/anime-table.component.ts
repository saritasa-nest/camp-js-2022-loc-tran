import { HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationParamsMapper } from '@js-camp/core/mappers/paginationParams.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';
import { PaginationParams } from '@js-camp/core/models/paginationParams';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';

import { AnimeService } from '../../../../core/services/anime.service';

const DEFAULT_PARAMS = new PaginationParams({
  ordering: '',
  page: 0,
  limit: 25,
  sorting: '',
  type: '',
});

/** Anime table. */
@Component({
  selector: 'camp-anime-table',
  templateUrl: './anime-table.component.html',
  styleUrls: ['./anime-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeTableComponent {

  /** Filter options. */
  public readonly filterTypes = ['TV', 'OVA', 'MOVIE'];

  /** Column title of anime table. */
  public readonly columnTitles = [
    'Image',
    'Title English',
    'Title Japanese',
    'Aired start',
    'Type',
    'Status',
  ];

  /** Anime data response from BE. */
  public readonly paginationAnime$: Observable<Pagination<Anime>>;

  /** Query params. */
  public readonly queryParamsUrl$ = new BehaviorSubject<PaginationParams>(
    DEFAULT_PARAMS,
  );

  /** Number of anime. */
  public length = 0;

  public constructor(
    private readonly animeService: AnimeService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
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

  /**
   * Handle change for pagination.
   * @param event Pagination event.
   */
  public handlePaginationChange(event: PageEvent): void {
    const query = new PaginationParams({
      ...DEFAULT_PARAMS,
      ...this.route.snapshot.queryParams,
      limit: event.pageSize,
      page: event.pageIndex,
    });
    this.router.navigate(['/'], { queryParams: { ...query } });
  }

  /**
   *
   * @param event Sort event emitted from material select.
   */
  public handleSortChange(event: Sort): void {
    const query = new PaginationParams({
      ...DEFAULT_PARAMS,
      ...this.route.snapshot.queryParams,
      ordering: event.direction,
      sorting: event.direction !== '' ? event.active : '',
    });
    this.router.navigate(['/'], { queryParams: { ...query } });
  }

  /**
   *
   * @param event Filter event emitted from material select.
   */
  public handleFilterChange(event: string[]): void {
    const query = new PaginationParams({
      ...DEFAULT_PARAMS,
      ...this.route.snapshot.queryParams,
      type: event.join(','),
    });
    this.router.navigate(['/'], { queryParams: { ...query } });
  }
}
