import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationParamsMapper } from '@js-camp/core/mappers/paginationParams.mapper';
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
    sorting: '',
    type: '',
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
      header: 'sorting',
      options: [
        { title: 'Status', value: 'status' },
        { title: 'Title in English', value: 'title_eng' },
        { title: 'Aired start', value: 'airead__startswith' },
      ],
    },
    {
      title: 'Order by: ',
      header: 'ordering',
      options: [
        { title: 'Ascending', value: '' },
        { title: 'Descending', value: '-' },
      ],
    },
    {
      title: 'Filter by: ',
      header: 'type',
      options: [
        { title: 'Tv', value: 'TV' },
        { title: 'Ova', value: 'OVA' },
        { title: 'Movie', value: 'MOVIE' },
        { title: 'Special', value: 'SPECIAL' },
        { title: 'Ona', value: 'ONA' },
        { title: 'Music', value: 'MUSIC' },
      ],
    },
  ];

  public constructor(
    private readonly animeService: AnimeService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.paginationAnime$ = this.route.queryParams.pipe(
      tap(params => {
        const page = params['page'] ?? this.defaultParams.page;
        this.currentPageIndex = page;
        const pageSize = params['limit'] ?? this.defaultParams.limit;
        this.pageSize = pageSize;
      }),
      switchMap(params => {
        const query = new PaginationParams({
          ...this.defaultParams,
          ...params,
        });
        return this.animeService
          .getAnime(
            new HttpParams({
              fromObject: { ...PaginationParamsMapper.toDto(query) },
            }),
          )
          .pipe(
            tap(pagination => {
              this.length = pagination.count;
            }),
          );
      }),
    );
  }

  /**
   * Handle change for pagination.
   * @param event Pagination event.
   */
  public handlePaginationChange(event: PageEvent): void {
    const query = new PaginationParams({
      ...this.defaultParams,
      ...this.route.snapshot.queryParams,
      limit: event.pageSize,
      page: event.pageIndex,
    });
    this.router.navigate(['/'], { queryParams: { ...query } });
  }

  /**
   * Handle change for selection.
   * @param value New value of the selection.
   * @param header Header to put in Pagination Params.
   */
  public handleSelectionChange(value: string, header: string): void {
    const query = new PaginationParams({
      ...this.defaultParams,
      ...this.route.snapshot.queryParams,
      [header]: value,
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
