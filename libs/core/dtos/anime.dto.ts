import { DateRangeDto } from './dateRange.dto';

/** Enum for anime type. */
export enum AnimeType {
  tv = 'TV',
  ova = 'OVA',
  movie = 'MOVIE',
  special = 'SPECIAL',
  ona = 'ONA',
  music = 'MUSIC',
}

/** Enum for anime status. */
export enum AnimeStatus {
  finished = 'FINISHED',
  notYetAired = 'NOT_YET_AIRED',
  airing = 'AIRING',
}

/** Class for anime. */
export interface AnimeDto {

  /** Id of the anime. */
  readonly id: number;

  /** English title of the anime. */
  readonly title_eng: string;

  /** Japan title of the anime. */
  readonly title_jpn: string;

  /** Image of the anime. */
  readonly image: string;

  /** Aired start of the anime. */
  readonly aired: DateRangeDto;

  /** Type of the anime. */
  readonly type: AnimeType;

  /** Status of the anime. */
  readonly status: AnimeStatus;
}
