import { AxiosRequestConfig } from 'axios';

import { CONFIG } from './config';

/**
 * Interceptor for request.
 * @param config Config variable for axios.
 */
export function requestInterceptor(config: AxiosRequestConfig): AxiosRequestConfig {
  const { headers } = config;

  if (headers === null) {
    throw new Error('Axios did not pass any header.');
  }
  return {
    ...config,
    headers: {
      ...headers,
      'Api-Key': CONFIG.apiKey,
    },
  };
}
