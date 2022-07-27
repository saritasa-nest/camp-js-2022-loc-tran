import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Params as PaginationParams } from '@js-camp/core/models/params';
import { Anime } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';
import { Observable } from 'rxjs';
import { ParamsMapper } from '@js-camp/core/mappers/params.mapper';
import { ActivatedRoute, Params, Router } from '@angular/router';

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

  private defaultParams: PaginationParams = new PaginationParams({
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
      const page = (params['offset'] ?? this.defaultParams.offset) / (params['limit'] ?? this.defaultParams.limit);
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

    // this.paginationAnime$ = this.animeService.getAnime(
    //   new HttpParams({ fromObject: { ...ParamsMapper.toDto(query) } }),
    // );
  }
}
