import { PaginationParams } from '@js-camp/core/models/paginationParams';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AnimeService, DEFAULT_QUERY_PARAMS } from '../../api/services/animeService';

export const fetchAnime = createAsyncThunk(
  'animeList/fetchAnime',
  () => AnimeService.getAnime(),
);

export const fetchMoreAnime = createAsyncThunk(
  'animeList/fetchMoreAnime',
  (pageNumber: number) => AnimeService.getAnime(new PaginationParams({
    ...DEFAULT_QUERY_PARAMS,
    page: pageNumber,
  })),
);
