import { DataError } from '../dtos/httpError.dto';

import { Immerable, OmitImmerable } from './immerable';

/** Class for HTTP error data. */
export class HTTPError extends Immerable {

  /** Status code of the error. */
  public readonly code: number;

  /** Detail of the error. */
  public readonly detail: string;

  /** List of error. */
  public readonly data: DataError;

  public constructor(data: HttpErrorArgs) {
    super();
    this.code = data.code;
    this.detail = data.detail;
    this.data = data.data;
  }

}

type HttpErrorArgs = OmitImmerable<HTTPError>;
