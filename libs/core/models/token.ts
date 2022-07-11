import { Immerable, OmitImmerable } from './immerable';

/** Class for Token data. */
export class Token extends Immerable {

  /** Refresh token string. */
  public readonly refreshToken: string;

  /** Access token string. */
  public readonly accessToken: string;

  public constructor(data: TokenArgs) {
    super();
    this.refreshToken = data.refreshToken;
    this.accessToken = data.accessToken;
  }
}

type TokenArgs = OmitImmerable<Token>;
