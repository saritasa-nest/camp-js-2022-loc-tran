/** Interface for error datalist. */
export interface DataError {
  readonly [key: string]: string[];
}

/** Interface for HTTP error dto. */
export interface HTTPErrorDto extends Error {

  readonly response: {
    readonly status: number;
    readonly data: {
      readonly detail: string;
      readonly data: DataError;
    };
  };

}
