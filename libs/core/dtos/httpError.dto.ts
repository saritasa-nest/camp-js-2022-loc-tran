import { HttpError } from '../models/httpError';
import { Immerable, OmitImmerable } from '../models/immerable';

/** Interface for error datalist. */
export interface DataError {
  readonly [key: string]: string[];
}

/** Interface for HTTP error dto. */
<<<<<<< HEAD
export class HttpErrorDto extends Immerable {

  /** Detail of error. */
  public readonly detail: string;

  /** Data response from BE. */
  public readonly data: DataError;

  public constructor(data: HttpErrorDtoAgrs) {
    super();
    this.detail = data.detail;
    this.data = data.data;
  }
=======
export interface HttpErrorDto extends Error {
  readonly response: {
    readonly data: {
      readonly detail: string;
      readonly data: DataError;
    };
  };
>>>>>>> develop
}

type HttpErrorDtoAgrs = OmitImmerable<HttpError>;
