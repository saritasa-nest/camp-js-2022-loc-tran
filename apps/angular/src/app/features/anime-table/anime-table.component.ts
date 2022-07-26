import { Component, OnInit } from '@angular/core';
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

  public constructor(private animeService: AnimeService) {}

  /** Init function. */
  public ngOnInit(): void {
    this.animeService.getAnime().subscribe(pagination => {
      this.animePagination = pagination;
    });
  }
}
