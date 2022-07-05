import axios, { AxiosInstance } from 'axios';

import { apiHeader } from '../script/constants';

export const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    [apiHeader]: import.meta.env.VITE_API_KEY,
  },
});

// http.interceptors.request.use(schemaInterceptor);
