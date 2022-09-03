import { createAsyncThunk } from '@reduxjs/toolkit';

import { AnimeService } from '../../api/services/animeService';

export const fetchAnime = createAsyncThunk(
  'animeList/fetchAnime',
  (queryParams: URLSearchParams = new URLSearchParams()) => AnimeService.getAnime(queryParams),
);

export const fetchMoreAnime = createAsyncThunk(
  'animeList/fetchMoreAnime',
  () => AnimeService.getMoreAnime(),
);
