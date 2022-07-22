/** Params for query. */
export interface ParamsDto {

  /** Offset of the first anime in list. */
  readonly offset: string;

  /** Number of maximum anime return. */
  readonly limit: string;

  /** Sorting type for anime list. */
  readonly ordering: string;
}
