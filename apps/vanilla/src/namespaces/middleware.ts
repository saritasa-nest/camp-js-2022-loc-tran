import { ACCESS_TOKEN, REFRESH_TOKEN } from '../script/constants/localStorageName';
import { LOGIN_PAGE, PROFILE_PAGE } from '../script/constants/redirectUrl';
import { verifyToken, getRefreshedToken, storeTokens } from '../services/token';

export namespace Middleware {

  /** Check if user is logged in or not. If not, redirect to login page. */
  export function checkIsLoggedIn(): void {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (accessToken === null || refreshToken === null) {
      location.replace(LOGIN_PAGE);
    }
  }

  /** Check if user is logged in then redirect to profile page. */
  export function checkIsNotLoggedIn(): void {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (accessToken === null || refreshToken === null) {
      return;
    }
    location.replace(PROFILE_PAGE);
  }

  /** Check is user have authenticated. */
  export async function isAuthorized(): Promise<boolean> {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    const refreshToken = localStorage.getItem('REFRESH_TOKEN');
    if (accessToken === null || refreshToken === null) {
      return false;
    }
    const isValidToken = await verifyToken(accessToken);
    if (isValidToken === false) {
      try {
        const tokens = await getRefreshedToken(refreshToken);
        storeTokens(tokens);
        return true;
      } catch (error: unknown) {
        return false;
      }
    }
    return true;
  }
}
