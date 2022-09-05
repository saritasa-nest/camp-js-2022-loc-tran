import { Sorting } from '@js-camp/core/models/anime';
import { PaginationParams } from '@js-camp/core/models/paginationParams';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AnimeService } from '../../api/services/animeService';

/** Specify order type for sort option. */
export enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

export const DEFAULT_QUERY_PARAMS = new PaginationParams({
  limit: 25,
  page: 0,
  ordering: SortDirection.Ascending,
  sorting: Sorting.Default,
  type: '',
  search: '',
});

export const getPaginationFromURLSearch = (urlSearchParams: URLSearchParams): PaginationParams => {
  const paramsMap: Record<string, string> = {};
  for (const key of Object.keys(DEFAULT_QUERY_PARAMS)) {
    const value = urlSearchParams.get(key);
    if (value !== null && value !== '') {
      paramsMap[key] = value;
    }
  }
  return new PaginationParams({ ...DEFAULT_QUERY_PARAMS, ...paramsMap });
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
