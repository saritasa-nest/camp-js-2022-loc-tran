import axios, { AxiosInstance } from 'axios';

import { API_HEADER } from '../script/constants';

export const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    [API_HEADER]: import.meta.env.VITE_API_KEY,
  },
});
