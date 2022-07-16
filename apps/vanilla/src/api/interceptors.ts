import { AxiosRequestConfig } from 'axios';

import { CONFIG } from './config';

/**
 * Interceptor for request.
 * @param config Config variable for axios.
 */
export function requestInterceptor(config: AxiosRequestConfig): AxiosRequestConfig {
  const { headers } = config;

  if (headers === null || headers === undefined) {
    throw new Error('Axios did not pass any header.');
  }
  if (localStorage.getItem('ACCESS_TOKEN') !== null) {
    headers.Authorization = `Bearer ${localStorage.getItem('ACCESS_TOKEN') ?? ''}`;
  }
  return {
    ...config,
    headers: {
      ...headers,
      'Api-Key': CONFIG.apiKey,
    },
  };
}
