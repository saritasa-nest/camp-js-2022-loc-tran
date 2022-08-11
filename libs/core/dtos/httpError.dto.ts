/** Interface for error datalist. */
export interface DataError {
  readonly [key: string]: string[];
}

/** Interface for HTTP error dto. */
export interface HttpErrorDto extends Error {
  readonly response: {
    readonly data: {
      readonly detail: string;
      readonly data: DataError;
    };
  };
}
