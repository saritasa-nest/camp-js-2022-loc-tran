import { getRefreshedToken, storeTokens, verifyToken } from '../services/token';

import { renderHeader } from './renderToUI';

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

/** Check permission of user, if user is'nt authorized, redirect to login page. */
export async function checkPermission(): Promise<void> {
  if (await isAuthorized() === false) {
    location.replace('/login/');
  } else {
    renderHeader();
  }
}
