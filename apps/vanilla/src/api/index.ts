import axios from 'axios';

import { requestInterceptor } from './interceptors';

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

http.interceptors.request.use(requestInterceptor);
