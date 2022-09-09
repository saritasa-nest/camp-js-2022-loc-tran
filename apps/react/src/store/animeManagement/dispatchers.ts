import { Anime } from '@js-camp/core/models/anime';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AnimeService } from '../../api/services/animeService';

export const getAnimeManagement = createAsyncThunk(
  'animeManagement/getAnimeManagement',
  (animeId: Anime['id']) => AnimeService.getAnimeManagement(animeId),
);
