import { Anime, Sorting, SortDirection } from '@js-camp/core/models/anime';
import { AnimeManagement, AnimeManagementPost } from '@js-camp/core/models/animeManagement';
import { PaginationParams } from '@js-camp/core/models/paginationParams';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AnimeService } from '../../api/services/animeService';

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

export const deleteAnime = createAsyncThunk(
  'animeList/deleteAnime',
  async(animeId: Anime['id']) => {
    await AnimeService.deleteAnime(animeId);
    return animeId;
  },
);

export const postAnimePoster = createAsyncThunk(
  'animeList/postAnimePoster',
  (poster: File) => AnimeService.postAnimePoster(poster),
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

export const addAnime = createAsyncThunk<
  AnimeManagement,
  AnimeManagementPost,
  {
    rejectValue: string;
  }
>('animeManagement/addAnime', async(animeData, { rejectWithValue }) => {
  try {
    return await AnimeService.addAnime(animeData);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.message);
    }
    throw error;
  }
});
