/** Interface for error datalist. */
export interface DataError {
  readonly [key: string]: string[];
}

/** Interface for HTTP error dto. */
export interface HttpErrorDto {

  /** Detail of error. */
  readonly detail: string;

  /** Data response from BE. */
  readonly data: DataError;
}
