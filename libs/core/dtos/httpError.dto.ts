/** Interface for error datalist dto. */
export interface DataErrorDto {
  readonly [key: string]: string[];
}

/** Interface for HTTP error dto. */
export interface HttpErrorDto extends Error {
  readonly detail: string;
  readonly data: DataErrorDto;
}
