/** Class for anime. */
export interface Anime {

  /** Id of the anime. */
  readonly id: number;

  /** English title of the anime. */
  readonly titleEng: string;

  /** Japan title of the anime. */
  readonly titleJapan: string;

  /** Image of the anime. */
  readonly image: string;

  /** Aired start of the anime. */
  readonly start: Date;

  /** Aired end of the anime. */
  readonly end: Date;

  /** Type of the anime. */
  readonly type: String;

  /** Status of the anime. */
  readonly status: String;
}
