import { getRefreshedToken, storeTokens, verifyToken } from '../services/token';

/** Check is user have authenticated. */
export async function isAuth(): Promise<boolean> {
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
