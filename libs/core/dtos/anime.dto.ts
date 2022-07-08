import { DateRangeDto } from './dateRange.dto';

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
  readonly type: string;

  /** Status of the anime. */
  readonly status: string;
}
