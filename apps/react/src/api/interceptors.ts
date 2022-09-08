import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { CONFIG } from './config';
import { TokenService } from './services/tokenService';

const authRoute = 'auth/';
const s3UploadRoute = 'https://s3.us-west-2.amazonaws.com/camp-js-backend-files-dev';

/**
 * Interceptor for request.
 * @param config Config variable for axios.
 */
export async function requestInterceptor(config: AxiosRequestConfig): Promise<AxiosRequestConfig> {
  const { headers } = config;

  if (headers == null) {
    throw new Error('Axios did not pass any header.');
  }

  if (shouldPassTokens(config.url)) {
    const tokens = await TokenService.getTokensFromStorage();
    headers['Authorization'] = `Bearer ${tokens?.accessToken}`;
  }

  return {
    ...config,
    headers: {
      ...headers,
      'Api-Key': CONFIG.apiKey,
    },
  };
}

/**
 * If Error is 401 and exist tokens in storage then refresh tokens.
 * @param error Error response.
 */
export async function refreshTokenInterceptor(error: unknown): Promise<void> {
  if (error instanceof AxiosError && error.response?.status === 401) {
    const tokens = await TokenService.getTokensFromStorage();
    if (tokens === null) {
      throw error;
    }
    await TokenService.removeTokens();
    const newTokens = await TokenService.getRefreshedToken(tokens.refreshToken);
    await TokenService.storeTokens(newTokens);
    const retryRequestConfig = {
      ...error.config,
      headers: {
        ...error.config.headers,
        Authorization: `Bearer ${newTokens.accessToken}`,
      },
    };
    return axios.request(retryRequestConfig);
  }
  throw error;
}

/**
 * Check if interceptor should pass tokens to request or not.
 * @param url Url address of request.
 */
function shouldPassTokens(url: string | undefined): boolean {
  if (url === undefined || url.includes(authRoute) || url.includes(s3UploadRoute)) {
    return false;
  }
  return true;
}
