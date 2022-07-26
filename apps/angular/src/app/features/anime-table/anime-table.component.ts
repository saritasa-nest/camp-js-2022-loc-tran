import { Component } from '@angular/core';
import { Anime } from '@js-camp/core/models/anime';
import { Observable } from 'rxjs';

import { AnimeService } from '../../../core/services/anime.service';

/** Anime table. */
@Component({
  selector: 'camp-anime-table',
  templateUrl: './anime-table.component.html',
  styleUrls: ['./anime-table.component.css'],
})
export class AnimeTableComponent {

  /** Header title of anime table. */
  public readonly columnTitles = ['Image', 'Title English', 'Title Japanese', 'Aired start', 'Type', 'Status'];

  /** Anime data response from BE. */
  public animeList$: Observable<readonly Anime[]>;

  public constructor(private readonly animeService: AnimeService) {
    this.animeList$ = animeService.getAnime();
  }
}
