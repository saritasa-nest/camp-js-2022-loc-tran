import { DateRange } from './dateRange';

/** Specify anime types in anime table. */
export enum AnimeType {
  Tv = 'TV',
  Ova = 'OVA',
  Movie = 'MOVIE',
  Special = 'SPECIAL',
  Ona = 'ONA',
  Music = 'MUSIC',
}

/** Specify anime status in anime table. */
export enum AnimeStatus {
  Finished = 'FINISHED',
  NotYetAired = 'NOT_YET_AIRED',
  Airing = 'AIRING',
}

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
