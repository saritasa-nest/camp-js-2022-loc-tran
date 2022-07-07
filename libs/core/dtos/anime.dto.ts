/** Aired DTO. */
interface AiredDto {

  /** End date Anime. */
  readonly end: Date;

  /** Start date Anime. */
  readonly start: Date;
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
  readonly aired: AiredDto;

  /** Type of the anime. */
  readonly type: String;

  /** Status of the anime. */
  readonly status: String;
}
