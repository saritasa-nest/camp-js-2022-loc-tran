/** Params for query. */
export interface PaginationParamsDto {

  /** Offset of the first anime in list. */
  readonly offset: string;

  /** Number of maximum anime return. */
  readonly limit: string;

  /** Sorting type for anime list. */
  readonly ordering: string;

  /** Filter anime list by type. */
  readonly type__in: string;

  /** Search anime by name. */
  readonly search: string;
}
