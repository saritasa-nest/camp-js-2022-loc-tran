import axios from 'axios';

import { API_HEADER } from '../script/constants';

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    [API_HEADER]: import.meta.env.VITE_API_KEY,
  },
});
