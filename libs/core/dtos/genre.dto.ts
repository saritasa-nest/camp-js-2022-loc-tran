/** Genre dto data. */
export interface GenreDto {

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

/** Genre dto types. */
export enum GenreTypeDto {
  Genres = 'GENRES',
  ExplicitGenres = 'EXPLICIT_GENRES',
  Themes = 'THEMES',
  Demographics = 'DEMOGRAPHICS',
}
