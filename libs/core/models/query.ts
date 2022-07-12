/** Interface for 1 query. */
export interface Query {

  /** Name of the query. */
  readonly name: string;

  /** Title to store data to local storage. */
  readonly localStorageName: string;

  /** Value of the query. */
  readonly value: string | number;

  /** Null value of the query. */
  readonly nullValue: string;
}

/** Store query variable. */
export interface Queries {

  /** List of query. */
  readonly queryList: Query[];

}
