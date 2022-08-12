/** Interface for error datalist dto. */
interface DataErrorDto {
  readonly [key: string]: string[];
}

/** Interface for HTTP error dto. */
export interface HttpErrorDto {

  /** Detail of error. */
  readonly detail: string;

  /** Data response from back end. */
  readonly data: DataErrorDto;
}
