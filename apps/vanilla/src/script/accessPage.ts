import { PROFILE_PAGE } from './constants';
import { initLoginForm, initRegisterForm } from './init';
import { isAuthorized } from './isAuthenticated';

/** Check if logged in user request login page. */
export async function isAccessAbleLogin(): Promise<void> {
  const isLoggedIn = await isAuthorized();
  if (isLoggedIn === true) {
    location.replace(PROFILE_PAGE);
    return;
  }
  initLoginForm();
}

/** Check if logged in user request login page. */
export async function isAccessAbleRegister(): Promise<void> {
  const isLoggedIn = await isAuthorized();
  if (isLoggedIn === true) {
    location.replace(PROFILE_PAGE);
    return;
  }
  initRegisterForm();
}
