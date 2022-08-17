export type GenrePostDto = Omit<GenreDto, 'id' | 'created' | 'modified'>;

/** Genre dto data. */
export interface GenreDto {

  /** Id of the Genre. */
  readonly id: number;

  /** Name of the Genre. */
  readonly name: string;

  /** Type of the Genre. */
  // I used concrete value here because type of genre is
  // not use in application but required in api.
  readonly type: 'GENRES';
}
