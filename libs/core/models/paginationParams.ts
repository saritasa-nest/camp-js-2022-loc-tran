import { Immerable, OmitImmerable } from './immerable';

/** Params for query. */
export class PaginationParams extends Immerable {

  /** Number of maximum anime return. */
  public readonly limit: number;

  /** Sorting type for anime list. (Sort by status, title, ...). */
  public readonly ordering: string;

  /** Ordering type for anime list. (Ordering by ascending, descending. ). */
  public readonly sorting: string;

  /** Filter anime list by type. */
  public readonly type: string;

  /** Current page of table. */
  public readonly page: number;

  public constructor(data: PaginationParamsArgs) {
    super();
    this.limit = data.limit;
    this.ordering = data.ordering;
    this.sorting = data.sorting;
    this.page = data.page;
    this.type = data.type;
  }
}

type PaginationParamsArgs = OmitImmerable<PaginationParams>;
