import { ACCESS_TOKEN, REFRESH_TOKEN } from '../script/constants/localStorageName';
import { LOGIN_PAGE, PROFILE_PAGE } from '../script/constants/redirectUrl';
import { LocalStorageService } from '../services/localStorageService';

export namespace AuthorizationChecker {

  /** Check if user is logged in or not. If not, redirect to login page. */
  export function redirectUserNotLoggedIn(): void {
    const accessToken = LocalStorageService.get(ACCESS_TOKEN);
    const refreshToken = LocalStorageService.get(REFRESH_TOKEN);
    if (accessToken === null || refreshToken === null) {
      location.replace(LOGIN_PAGE);
    }
  }

  /** Check if user is logged in then redirect to profile page. */
  export function redirectUserLoggedIn(): void {
    const accessToken = LocalStorageService.get(ACCESS_TOKEN);
    const refreshToken = LocalStorageService.get(REFRESH_TOKEN);
    if (accessToken === null || refreshToken === null) {
      return;
    }
    location.replace(PROFILE_PAGE);
  }
}
