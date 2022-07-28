import { Immerable, OmitImmerable } from './immerable';

/** Sorting options for user. */
export enum Sorting {
  Default = '',
  EnglishTitle = 'title_eng',
  AiredStart = 'aired__startswith',
  Status = 'status',
}

/** Params for query. */
export class PaginationParams extends Immerable {

  /** Offset of the first anime in list. */
  public readonly offset: number;

  /** Number of maximum anime return. */
  public readonly limit: number;

  /** Sorting type for anime list. */
  public readonly ordering: string;

  /** Search for anime list. */
  public readonly search: string;

  public constructor(data: PaginationParamsArgs) {
    super();
    this.offset = data.offset;
    this.limit = data.limit;
    this.ordering = data.ordering;
    this.search = data.search;
  }
}

type PaginationParamsArgs = OmitImmerable<PaginationParams>;
