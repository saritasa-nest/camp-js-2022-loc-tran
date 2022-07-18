import { Immerable, OmitImmerable } from './immerable';

/** Params for query. */
export class Params extends Immerable {

  /** Offset of the first anime in list. */
  public readonly offset: number;

  /** Number of maximum anime return. */
  public readonly limit: number;

  /** Sorting type for anime list. */
  public readonly ordering: string;

  public constructor(data: ParamsArgs) {
    super();
    this.offset = data.offset;
    this.limit = data.limit;
    this.ordering = data.ordering;
  }
}

type ParamsArgs = OmitImmerable<Params>;
