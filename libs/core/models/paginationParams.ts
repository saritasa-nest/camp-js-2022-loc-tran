import { Immerable, OmitImmerable } from './immerable';

/** Params for query. */
export class PaginationParams extends Immerable {

  /** Number of maximum anime return. */
  public readonly limit: number;

  /** Sorting type for anime list. */
  public readonly ordering: string;

  /** Current page of table. */
  public readonly page: number;

  public constructor(data: PaginationParamsArgs) {
    super();
    this.limit = data.limit;
    this.ordering = data.ordering;
    this.page = data.page;
  }
}

type PaginationParamsArgs = OmitImmerable<PaginationParams>;
