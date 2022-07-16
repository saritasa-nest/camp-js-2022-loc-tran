/** Sorting dto options for user. */
export enum SortingDto {
  Default = '',
  EnglishTitle = 'title_eng',
  AiredStart = 'aired__startswith',
  Status = 'status',
  EnglishTitleDecs = '-title_eng',
  AiredStartDecs = '-aired__startswith',
  StatusDecs = '-status',
}

/** Params for query. */
export interface ParamsDto {

  /** Offset of the first anime in list. */
  readonly offset: string;

  /** Number of maximum anime return. */
  readonly limit: string;

  /** Sorting type for anime list. */
  readonly ordering: SortingDto;
}
