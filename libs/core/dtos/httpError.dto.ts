/** Interface for HTTP error dto. */
export interface HTTPErrorDto extends Error {

  /** Detail of the error. */
  readonly detail: string;

  /** Error code. */
  readonly code: string;

}
