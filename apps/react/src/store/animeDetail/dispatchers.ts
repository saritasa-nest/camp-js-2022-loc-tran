import { Anime } from '@js-camp/core/models/anime';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AnimeService } from '../../api/services/animeService';

export const fetchAnimeDetail = createAsyncThunk(
  'animeDetail/fetchAnimeDetail',
  (animeId: Anime['id']) => AnimeService.getAnimeById(animeId),
);
