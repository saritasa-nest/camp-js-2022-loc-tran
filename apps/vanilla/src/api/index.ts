import axios from 'axios';

export const API_HEADER = 'Api-Key';

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    [API_HEADER]: import.meta.env.VITE_API_KEY,
  },
});
