import { Immerable, OmitImmerable } from './immerable';

/** Class for user data. */
export class User extends Immerable {

  /** User's email. */
  public readonly email: string;

  /** User's first name. */
  public readonly firstName: string;

  /** User's last name. */
  public readonly lastName: string;

  /** User's avatar. */
  public readonly avatar: string | null;

  /** User's created date time. */
  public readonly created: Date;

  /** User's updated date time. */
  public readonly modified: Date;

  public constructor(data: UserArgs) {
    super();
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.avatar = data.avatar;
    this.created = data.created;
    this.modified = data.modified;
  }
}

type UserArgs = OmitImmerable<User>;
