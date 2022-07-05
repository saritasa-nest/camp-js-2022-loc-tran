/** Aired DTO. */
interface AiredDto {

  /** End date Anime. */
  readonly end: string;

  /** Start date Anime. */
  readonly start: string;
}

/** Class for anime. */
export interface AnimeDto {

  /** Id of the anime. */
  readonly id: number;

  /** English title of the anime. */
  readonly titleEng: string;

  /** Japan title of the anime. */
  readonly titleJapan: string;

  /** Image of the anime. */
  readonly image: string;

  /** Aired start of the anime. */
  readonly aired: AiredDto;

  /** Type of the anime. */
  readonly type: String;

  /** Status of the anime. */
  readonly status: String;
}
