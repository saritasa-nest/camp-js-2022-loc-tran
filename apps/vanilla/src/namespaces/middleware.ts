import { LOGIN_PAGE, PROFILE_PAGE } from '../script/constants';
import { getRefreshedToken, storeTokens, verifyToken } from '../services/token';

export namespace Middleware {

  /** Check if user is logged in or not. If not, redirect to login page. */
  export async function isLoggedIn(): Promise<void> {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    const refreshToken = localStorage.getItem('REFRESH_TOKEN');
    if (accessToken === null || refreshToken === null) {
      location.replace(LOGIN_PAGE);
      return;
    }
    const isValidToken = await verifyToken(accessToken);
    if (isValidToken === false) {
      try {
        const tokens = await getRefreshedToken(refreshToken);
        storeTokens(tokens);
        await isLoggedIn();
      } catch (error: unknown) {
        location.replace(LOGIN_PAGE);
      }
    }
  }

  /** Check if user is logged in then redirect to profile page. */
  export async function isNotLoggedIn(): Promise<void> {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    if (accessToken === null) {
      return;
    }
    const isValidToken = await verifyToken(accessToken);
    if (isValidToken) {
      location.replace(PROFILE_PAGE);
    }
  }
}
