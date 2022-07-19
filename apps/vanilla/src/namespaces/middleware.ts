import { ACCESS_TOKEN, REFRESH_TOKEN } from '../script/constants/localStorageName';
import { LOGIN_PAGE, PROFILE_PAGE } from '../script/constants/redirectUrl';

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
}
