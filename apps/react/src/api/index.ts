import axios, { AxiosInstance } from 'axios';

import { CONFIG } from './config';
import { requestInterceptor } from './interceptors';

export const http: AxiosInstance = axios.create({
  baseURL: CONFIG.apiUrl,
});

http.interceptors.request.use(requestInterceptor);
