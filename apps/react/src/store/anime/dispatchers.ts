import { createAsyncThunk } from '@reduxjs/toolkit';

import { AnimeService } from '../../api/services/animeService';

export const fetchAnime = createAsyncThunk(
  'animeList/fetchAnime',
  () => AnimeService.getAnime(),
);
