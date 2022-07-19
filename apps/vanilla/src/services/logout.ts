import { ACCESS_TOKEN, REFRESH_TOKEN } from '../script/constants/localStorageName';

/** Remove Access token and Refresh token from local storage. */
export function logout(): void {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
}
