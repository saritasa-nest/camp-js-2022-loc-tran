import { PROFILE_PAGE } from './constants';
import { initLoginForm, initRegisterForm } from './init';
import { isAuth } from './isAuth';

/** Check if logged in user request login page. */
export async function isAccessAbleLogin(): Promise<void> {
  const isLoggedIn = await isAuth();
  if (isLoggedIn === true) {
    location.replace(PROFILE_PAGE);
    return;
  }
  initLoginForm();
}

/** Check if logged in user request login page. */
export async function isAccessAbleRegister(): Promise<void> {
  const isLoggedIn = await isAuth();
  if (isLoggedIn === true) {
    location.replace(PROFILE_PAGE);
    return;
  }
  initRegisterForm();
}
