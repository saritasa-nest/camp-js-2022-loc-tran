// import { fetchAnime } from '../script/fetchAnime';
// console.warn(import.meta.env.VITE_API_URL);
import { Anime } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';
import axios from 'axios';

/** Fetch Anime.
 * @param url Url.
 */
async function fetchAnime(): Promise<Object> {
  const data = await axios({
    url: import.meta.env.VITE_API_URL,
    headers: {
      'Api-Key': import.meta.env.VITE_API_KEY,
    },
  });

  return data.data;
}

/** Print anime. */
async function printAnime(): Promise<void> {
  const data = await fetchAnime();
  console.warn(data);
}

printAnime();

console.warn(fetchAnime());
