import { PaginationParams } from '@js-camp/core/models/paginationParams';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AnimeService } from '../../api/services/animeService';

export const DEFAULT_QUERY_PARAMS = new PaginationParams({
  limit: 25,
  page: 0,
  ordering: '',
  sorting: '',
  type: '',
  search: '',
});

export const getPaginationFromURLSearch = (urlSearchParams: URLSearchParams): PaginationParams => {
  const paramsMap: Record<string, string> = {};
  for (const key of Object.keys(DEFAULT_QUERY_PARAMS)) {
    paramsMap[key] = urlSearchParams.get(key) ?? '';
  }
  return new PaginationParams(paramsMap);
};

export const fetchAnime = createAsyncThunk(
  'animeList/fetchAnime',
  (urlSearchParams: URLSearchParams = new URLSearchParams()) => AnimeService.getAnime(new PaginationParams({
    ...DEFAULT_QUERY_PARAMS,
    ...getPaginationFromURLSearch(urlSearchParams),
  })),
);

export const fetchMoreAnime = createAsyncThunk(
  'animeList/fetchMoreAnime',
  () => AnimeService.getMoreAnime(),
);
