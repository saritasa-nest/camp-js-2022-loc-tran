import { PaginationParams } from '@js-camp/core/models/paginationParams';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AnimeService, DEFAULT_QUERY_PARAMS } from '../../api/services/animeService';

export const fetchAnime = createAsyncThunk(
  'animeList/fetchAnime',
  (urlSearchParams: URLSearchParams = new URLSearchParams()) => {
    const paramsMap: Record<string, string> = {};
    for (const key of Object.keys(DEFAULT_QUERY_PARAMS)) {
      paramsMap[key] = urlSearchParams.get(key) ?? '';
    }
    return AnimeService.getAnime(new PaginationParams({
      ...DEFAULT_QUERY_PARAMS,
      ...paramsMap,
    }));
  },
);
