import { AnimeSourceDto } from '../enum/animeSource';
import { BroadcastDayDto } from '../enum/broadcastDay';
import { RatingDto } from '../enum/rating';
import { SeasonDto } from '../enum/season';

import { AnimeStatusDto, AnimeTypeDto } from './anime.dto';
import { DateRangeDto } from './dateRange.dto';
import { GenreDto } from './genre.dto';

/** Detail Dto data of the anime. */
export interface DetailDto {

  /** Id of the anime. */
  readonly id: number;

  /** Created date of the anime. */
  readonly created: string;

  /** Modified date of the anime. */
  readonly modified: string;

  /** Link trailer on youtube. */
  readonly trailer_youtube_id: string;

  /** Title in English of the anime. */
  readonly title_eng: string;

  /** Title in Japanese of the anime. */
  readonly title_jpn: string;

  /** Type of the anime. */
  readonly type: AnimeTypeDto;

  /** Status of the anime. */
  readonly status: AnimeStatusDto;

  /** Source of the anime. */
  readonly source: AnimeSourceDto;

  /** The anime is airing or not. */
  readonly airing: boolean;

  /** Date time range of aired. */
  readonly aired: DateRangeDto;

  /** Rating of the anime. */
  readonly rating: RatingDto;

  /** Season of the anime. */
  readonly season: SeasonDto;

  /** Synopsis of the anime. */
  readonly synopsis: string;

  /** Background of the anime. */
  readonly background: string;

  /** Broadcast day of the anime. */
  readonly broadcast_day: BroadcastDayDto | null;

  /** Broadcast time of the anime. */
  readonly broadcast_time: string | null;

  /** Broadcast timezone of the anime. */
  readonly broadcast_timezone: string | null;

  /** Studios of the anime. */
  readonly studios: number;

  /** Studios data of the anime. */
  readonly studios_data: StudioDto;

  /** Genres of the anime. */
  readonly genres: number;

  /** Genre data of the anime. */
  readonly genres_data: GenreDataDto;
}

/** Studio dto data. */
export interface StudioDto {

  /** Id of the studio. */
  readonly id: number;

  /** Created date of the studio. */
  readonly created: string;

  /** Modified date of the studio. */
  readonly modified: string;

  /** Name of the studio. */
  readonly name: string;
}

/** Genre dto data. */
export interface GenreDataDto {

  /** Id of the Genre. */
  readonly id: number;

  /** Created date of the Genre. */
  readonly created: string;

  /** Modified date of the Genre. */
  readonly modified: string;

  /** Name of the Genre. */
  readonly name: string;

  /** Type of the Genre. */
  readonly type: GenreDto;
}
