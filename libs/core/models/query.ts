/** Store query variable. */
export interface Query {

  /** Index of first anime request. */
  readonly offset: number;

  /** Max number of anime in response. */
  readonly limit: number;

  /** Specify the sorting type to sort anime list descending or ascending. */
  readonly sorting: string;

  /** Ordering anime list by descending or ascending. */
  readonly ordering: string;
}
