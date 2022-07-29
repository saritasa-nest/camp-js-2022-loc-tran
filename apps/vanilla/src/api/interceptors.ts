import { AxiosError, AxiosRequestConfig } from 'axios';

import { ACCESS_TOKEN, LOGIN_PAGE, REFRESH_TOKEN } from '../script/constants';
import { getRefreshedToken, storeTokens } from '../services/token';

import { CONFIG } from './config';

const API_KEY_HEADER = 'Api-Key';

/**
 * Interceptor for request.
 * @param config Config variable for axios.
 */
export function requestInterceptor(config: AxiosRequestConfig): AxiosRequestConfig {
  const { headers } = config;

  if (headers == null) {
    throw new Error('Axios did not pass any header.');
  }
  if (localStorage.getItem(ACCESS_TOKEN) !== null) {
    headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN) ?? ''}`;
  }
  return {
    ...config,
    headers: {
      ...headers,
      [API_KEY_HEADER]: CONFIG.apiKey,
    },
  };
}

/**
 * Interceptor for error.
 * @param error Error returned from BE.
 */
export async function errorInterceptor(error: AxiosError): Promise<void> {
  if (error.response?.status === 401) {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (accessToken !== null && refreshToken !== null) {
      try {
        const tokens = await getRefreshedToken(refreshToken);
        storeTokens(tokens);
      } catch (errorRefreshToken: unknown) {
        localStorage.clear();
        location.replace(LOGIN_PAGE);
        throw errorRefreshToken;
      }
    }
  }
}
