import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Anime } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';

import { AnimeService } from '../../../core/services/anime.service';

/** Anime table. */
@Component({
  selector: 'camp-anime-table',
  templateUrl: './anime-table.component.html',
  styleUrls: ['./anime-table.component.css'],
})
export class AnimeTableComponent implements OnInit {

  /** Anime Pagination. */
  public animePagination: Pagination<Anime> = {
    count: 0,
    next: null,
    previous: null,
    results: [],
  };

  /**
   * Handle change for pagination.
   * @param event Pagination event.
   */
  public handlePaginationChange(event: PageEvent): void {
    const params = new HttpParams({
      fromObject: {
        offset: event.pageIndex * event.pageSize,
        limit: event.pageSize,
      },
    });
    this.animeService.getAnime(params).subscribe(pagination => {
      this.animePagination = pagination;
    });
  }

  public constructor(private animeService: AnimeService) {}

  /** Init function. */
  public ngOnInit(): void {
    this.animeService.getAnime().subscribe(pagination => {
      this.animePagination = pagination;
    });
  }
}
