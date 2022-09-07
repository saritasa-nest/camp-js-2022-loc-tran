import { Anime } from '@js-camp/core/models/anime';
import { AnimeManagement } from '@js-camp/core/models/animeManagement';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AnimeService } from '../../api/services/animeService';

export const getAnimeManagement = createAsyncThunk(
  'animeManagement/getAnimeManagement',
  (animeId: Anime['id']) => AnimeService.getAnimeManagement(animeId),
);

export const editAnime = createAsyncThunk<
  AnimeManagement,
  AnimeManagement,
  {
    rejectValue: string;
  }
>('animeManagement/editAnime', async(animeData, { rejectWithValue }) => {
  try {
    return await AnimeService.editAnime(animeData);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.message);
    }
    throw error;
  }
});
