/** Interface for Auth data dto. */
export interface TokenDto {

  /** Refresh token string. */
  readonly refresh: string;

  /** Access token string. */
  readonly access: string;

}
