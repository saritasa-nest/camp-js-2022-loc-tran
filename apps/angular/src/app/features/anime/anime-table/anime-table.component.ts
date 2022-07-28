import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamsMapper } from '@js-camp/core/mappers/params.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { FilterOption } from '@js-camp/core/models/filterOption';
import { Pagination } from '@js-camp/core/models/pagination';
import { PaginationParams } from '@js-camp/core/models/paginationParams';
import { Observable, switchMap, tap } from 'rxjs';

import { AnimeService } from '../../../../core/services/anime.service';

/** Anime table. */
@Component({
  selector: 'camp-anime-table',
  templateUrl: './anime-table.component.html',
  styleUrls: ['./anime-table.component.css'],
})
export class AnimeTableComponent {
  /** Column title of anime table. */
  public readonly columnTitles = [
    'Image',
    'Title English',
    'Title Japanese',
    'Aired start',
    'Type',
    'Status',
  ];

  private readonly defaultParams = new PaginationParams({
    page: 0,
    limit: 25,
    ordering: '',
  });

  /** Default page after load. */
  public currentPageIndex = 0;

  /** Default page size after load. */
  public pageSize = 25;

  /** Anime data response from BE. */
  public readonly paginationAnime$: Observable<Pagination<Anime>>;

  /** Number of anime. */
  public length = 0;

  /** Filtering features for anime table. */
  public filterFeatures: readonly FilterOption[] = [
    {
      title: 'Sort by: ',
      options: [
        { title: 'Status', value: 'status' },
        { title: 'Title in English', value: 'title_eng' },
        { title: 'Aired start', value: 'airead__startswith' },
      ],
    },
    {
      title: 'Order by: ',
      options: [
        { title: 'Ascending', value: '' },
        { title: 'Descending', value: '-' },
      ],
    },
  ];

  public constructor(
    private readonly animeService: AnimeService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.paginationAnime$ = this.route.queryParams.pipe(
      switchMap(params => {
        const page = params['page'] ?? this.defaultParams.page;
        this.currentPageIndex = page;
        const pageSize = params['limit'] ?? this.defaultParams.limit;
        this.pageSize = pageSize;
        const query = new PaginationParams({
          ...this.defaultParams,
          ...params,
        });
        return this.animeService
          .getAnime(
            new HttpParams({ fromObject: { ...ParamsMapper.toDto(query) } }),
          )
          .pipe(tap(pagination => (this.length = pagination.count)));
      }),
    );
  }

  /**
   * Handle change for pagination.
   * @param event Pagination event.
   */
  public handlePaginationChange(event: PageEvent): void {
    const query = new PaginationParams({
      limit: event.pageSize,
      ordering: '',
      page: event.pageIndex,
    });
    this.router.navigate(['/'], { queryParams: { ...query } });
  }

  /**
   * Track filter feature by title.
   * @param index Index of current filter feature.
   * @param filter Current filter option Object.
   */
  public trackByFilterTitle(index: number, filter: FilterOption): string {
    return filter.title;
  }
}
