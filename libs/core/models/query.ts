/** Store query variable. */
export interface Query {

  /** Index of first anime request. */
  readonly offset: number;

  /** Max number of anime in response. */
  readonly limit: number;

  /** Sorting type. */
  readonly sorting: string;

  /** Ordering type. */
  readonly ordering: string;
}
