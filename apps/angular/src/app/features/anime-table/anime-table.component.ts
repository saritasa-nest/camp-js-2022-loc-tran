import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Anime } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';
import { Observable } from 'rxjs';

import { AnimeService } from '../../../core/services/anime.service';

/** Anime table. */
@Component({
  selector: 'camp-anime-table',
  templateUrl: './anime-table.component.html',
  styleUrls: ['./anime-table.component.css'],
})
export class AnimeTableComponent {

  /** Column title of anime table. */
  public readonly columnTitles = ['Image', 'Title English', 'Title Japanese', 'Aired start', 'Type', 'Status'];

  /** Anime data response from BE. */
  public paginationAnime$: Observable<Pagination<Anime>>;

  public constructor(private readonly animeService: AnimeService) {
    this.paginationAnime$ = animeService.getAnime();
  }

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
    this.paginationAnime$ = this.animeService.getAnime(params);
  }
}
