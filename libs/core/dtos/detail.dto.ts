import { AnimeStatusDto, AnimeTypeDto } from './anime.dto';
import { DateRangeDto } from './dateRange.dto';

/** Detail Dto data of the anime. */
export interface DetailDto {

  /** Id of the anime. */
  readonly id: number;

  /** Image of the anime. */
  readonly image: string;

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

  /** The anime is airing or not. */
  readonly airing: boolean;

  /** Date time range of aired. */
  readonly aired: DateRangeDto;

  /** Synopsis of the anime. */
  readonly synopsis: string;

  /** Background of the anime. */
  readonly background: string;

  /** Studios data of the anime. */
  readonly studios_data: readonly StudioDto[];

  /** Genre data of the anime. */
  readonly genres_data: readonly GenreDataDto[];
}

/** Genre dto types. */
export enum GenreTypeDto {
  Genres = 'GENRES',
  ExplicitGenres = 'EXPLICIT_GENRES',
  Themes = 'THEMES',
  Demographics = 'DEMOGRAPHICS',
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
  readonly type: GenreTypeDto;
}
