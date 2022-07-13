import { PROFILE_PAGE } from './constants';
import { initLoginForm, initRegisterForm } from './init';
import { isAuthorized } from './isAuthorized';

/** Check if logged in user request login page. */
export async function isAccessableLogin(): Promise<void> {
  const isLoggedIn = await isAuthorized();
  if (isLoggedIn === true) {
    location.replace(PROFILE_PAGE);
    return;
  }
  initLoginForm();
}

/** Check if logged in user request login page. */
export async function isAccessableRegister(): Promise<void> {
  const isLoggedIn = await isAuthorized();
  if (isLoggedIn === true) {
    location.replace(PROFILE_PAGE);
    return;
  }
  initRegisterForm();
}
