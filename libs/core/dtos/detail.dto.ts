import { AnimeDto } from './anime.dto';

/** Detail Dto data of the anime. */
export interface AnimeDetailDto extends AnimeDto {

  /** Link trailer on youtube. */
  readonly trailer_youtube_id: string;

  /** The anime is airing or not. */
  readonly airing: boolean;

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
