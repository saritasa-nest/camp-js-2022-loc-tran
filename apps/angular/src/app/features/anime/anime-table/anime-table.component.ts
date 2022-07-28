import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginationParams } from '@js-camp/core/models/paginationParams';
import { Anime } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';
import { Observable } from 'rxjs';
import { ParamsMapper } from '@js-camp/core/mappers/params.mapper';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FilterOption } from '@js-camp/core/models/filterOption';

import { AnimeService } from '../../../../core/services/anime.service';

/** Anime table. */
@Component({
  selector: 'camp-anime-table',
  templateUrl: './anime-table.component.html',
  styleUrls: ['./anime-table.component.css'],
})
export class AnimeTableComponent implements OnInit {

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
    offset: 0,
    limit: 25,
    ordering: '',
  });

  /** Default page after load. */
  public currentPageIndex = 0;

  /** Default page size after load. */
  public pageSize = 25;

  /** Anime data response from BE. */
  public paginationAnime$: Observable<Pagination<Anime>>;

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
    this.paginationAnime$ = animeService.getAnime();
  }

  /** Init function. */
  public ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      const page =
        (params['offset'] ?? this.defaultParams.offset) /
        (params['limit'] ?? this.defaultParams.limit);
      const pageSize = params['limit'] ?? this.defaultParams.limit;
      this.currentPageIndex = page;
      this.pageSize = pageSize;
      const query = new PaginationParams({
        offset: params['offset'] ?? this.defaultParams.offset,
        limit: params['limit'] ?? this.defaultParams.limit,
        ordering: params['ordering'] ?? this.defaultParams.ordering,
      });
      this.paginationAnime$ = this.animeService.getAnime(
        new HttpParams({ fromObject: { ...ParamsMapper.toDto(query) } }),
      );
    });
  }

  /**
   * Handle change for pagination.
   * @param event Pagination event.
   */
  public handlePaginationChange(event: PageEvent): void {
    const query = new PaginationParams({
      offset: event.pageIndex * event.pageSize,
      limit: event.pageSize,
      ordering: '',
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
