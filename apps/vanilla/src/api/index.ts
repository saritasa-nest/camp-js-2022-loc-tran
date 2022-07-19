import axios from 'axios';

import { errorInterceptor, requestInterceptor } from './interceptors';

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

http.interceptors.request.use(requestInterceptor);
// http.interceptors.response.use(response => response, errorInterceptor);
