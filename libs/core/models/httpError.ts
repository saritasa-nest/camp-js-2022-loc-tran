/** Interface for error datalist. */
export interface DataError {
  readonly [key: string]: string[];
}
import { Immerable, OmitImmerable } from './immerable';

/** Class for HTTP error data. */
export class HttpError extends Immerable {

  /** Detail of the error. */
  public readonly detail: string;

  /** List of errors. */
  public readonly data: DataError;

  public constructor(data: HttpErrorArgs) {
    super();
    this.detail = data.detail;
    this.data = data.data;
  }

}

type HttpErrorArgs = OmitImmerable<HttpError>;
