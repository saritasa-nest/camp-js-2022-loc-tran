/** Interface for user data dto.*/
export interface UserDto {

  /** Email of user. */
  readonly email: string;

  /** First name of user. */
  readonly first_name: string;

  /** Last name of user. */
  readonly last_name: string;

  /** Avatar of user. */
  readonly avatar: string | null;

  /** Created date time of user. */
  readonly created: string;

  /** Modified date time of user. */
  readonly modified: string;

}
