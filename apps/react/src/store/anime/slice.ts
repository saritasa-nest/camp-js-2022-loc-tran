import { createSlice } from '@reduxjs/toolkit';

import { fetchAnime, fetchMoreAnime } from './dispatchers';
import { initialState } from './state';

export const animeListSlice = createSlice({
  name: 'animeList',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchAnime.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAnime.fulfilled, (state, action) => {
        state.animeList = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMoreAnime.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchMoreAnime.fulfilled, (state, action) => {
        state.animeList = [...state.animeList, ...action.payload];
        state.currentPage += 1;
        state.isLoading = false;
      }),
});
