import { DateRangeDto } from './dateRange.dto';

/** Specify anime types dto in anime table. */
export enum AnimeTypeDto {
  Tv = 'TV',
  Ova = 'OVA',
  Movie = 'MOVIE',
  Special = 'SPECIAL',
  Ona = 'ONA',
  Music = 'MUSIC',
}

/** Specify anime status in anime table. */
export enum AnimeStatusDto {
  Finished = 'FINISHED',
  NotYetAired = 'NOT_YET_AIRED',
  Airing = 'AIRING',
}

export type AnimePostDto = Omit<AnimeDto, 'id'>;

/** Define data in Anime dto. */
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
  readonly type: AnimeTypeDto;

  /** Status of the anime. */
  readonly status: AnimeStatusDto;
}
