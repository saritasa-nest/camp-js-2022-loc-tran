import { Anime } from '@js-camp/core/models/anime';
import { AnimeDetail } from '@js-camp/core/models/animeDetail';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AnimeService } from '../../api/services/animeService';

export const fetchAnimeDetail = createAsyncThunk<
AnimeDetail,
Anime['id'],
{
  rejectValue: AxiosError;
}
>(
  'animeDetail/fetchAnimeDetail',
  (animeId, { rejectWithValue }) => {
    try {
      return AnimeService.getAnimeById(animeId);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error);
      }
      throw error;
    }
  },
);
