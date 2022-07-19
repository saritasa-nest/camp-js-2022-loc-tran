import { Immerable, OmitImmerable } from './immerable';

/** Class for Account. */
export class Account extends Immerable {

  /** Email of user. */
  public readonly email: string;

  /** First name of user. */
  public readonly firstName: string;

  /** Last name of user. */
  public readonly lastName: string;

  /** Password of user. */
  public readonly password: string;

  public constructor(data: AccountArgs) {
    super();
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.password = data.password;
  }

}

type AccountArgs = OmitImmerable<Account>;
