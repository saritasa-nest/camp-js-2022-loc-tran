import { SortDirection, Sorting } from './anime';
import { Immerable, OmitImmerable } from './immerable';

/** Params for query. */
export class PaginationParams extends Immerable {

  /** Number of maximum anime return. */
  public readonly limit: number;

  /** Sorting type for anime list. (Sort by status, title, ...). */
  public readonly ordering: SortDirection;

  /** Ordering type for anime list. (Ordering by ascending, descending. ). */
  public readonly sorting: Sorting;

  /** Filter anime list by type. */
  public readonly type: string;

  /** Current page of table. */
  public readonly page: number;

  /** Search by anime name. */
  public readonly search: string;

  public constructor(data: PaginationParamsArgs) {
    super();
    this.limit = data.limit;
    this.ordering = data.ordering;
    this.sorting = data.sorting;
    this.page = data.page;
    this.type = data.type;
    this.search = data.search;
  }

}

type PaginationParamsArgs = OmitImmerable<PaginationParams>;
