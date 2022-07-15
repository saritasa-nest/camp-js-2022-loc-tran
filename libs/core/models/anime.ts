import { AnimeStatus, AnimeType } from '../dtos/anime.dto';

import { DateRange } from './dateRange';

/** Define data in class Anime. */
export interface Anime {

  /** Id of the anime. */
  readonly id: number;

  /** English title of the anime. */
  readonly titleEnglish: string;

  /** Japanese title of the anime. */
  readonly titleJapanese: string;

  /** Image of the anime. */
  readonly image: string;

  /** Aired of the anime. */
  readonly aired: DateRange;

  /** Type of the anime. */
  readonly type: AnimeType;

  /** Status of the anime. */
  readonly status: AnimeStatus;
}
