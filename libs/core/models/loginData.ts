import { Immerable, OmitImmerable } from './immerable';

/** Class for login data. */
export class LoginData extends Immerable {

  /** User 's email. */
  public readonly email: string;

  /** User 's password. */
  public readonly password: string;

  public constructor(data: LoginDataArgs) {
    super();
    this.email = data.email;
    this.password = data.password;
  }
}

type LoginDataArgs = OmitImmerable<LoginData>;
