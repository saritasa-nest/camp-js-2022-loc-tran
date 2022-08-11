import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Anime } from '@js-camp/core/models/anime';
import { Observable } from 'rxjs';

import { AnimeService } from '../../../../core/services/anime.service';

/** Anime table. */
@Component({
  selector: 'camp-anime-table',
  templateUrl: './anime-table.component.html',
  styleUrls: ['./anime-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeTableComponent {

  /** Column title of anime table. */
  public readonly columnTitles = ['Image', 'Title English', 'Title Japanese', 'Aired start', 'Type', 'Status'];

  /** Anime data response from BE. */
  public readonly animeList$: Observable<readonly Anime[]>;

  public constructor(animeService: AnimeService) {
    this.animeList$ = animeService.getAnime();
  }

  /**
   * Function track by for anime table.
   * @param _index Index of anime.
   * @param anime Data of one anime.
   */
  public trackAnimeById(_index: number, anime: Anime): number {
    return anime.id;
  }
}
