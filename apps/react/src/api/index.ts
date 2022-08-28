import axios, { AxiosInstance } from 'axios';

import { CONFIG } from './config';
import { refreshTokenInterceptor, requestInterceptor } from './interceptors';

export const http: AxiosInstance = axios.create({
  baseURL: CONFIG.apiUrl,
});

http.interceptors.request.use(requestInterceptor);
http.interceptors.response.use(response => response, refreshTokenInterceptor);
