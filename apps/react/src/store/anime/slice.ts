import { createSlice } from '@reduxjs/toolkit';

import { fetchAnime, fetchMoreAnime } from './dispatchers';
import { animeAdapter, initialState, State } from './state';

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
        animeAdapter.setAll(state as State, action.payload);
        state.isLoading = false;
      })
      .addCase(fetchMoreAnime.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchMoreAnime.fulfilled, (state, action) => {
        state.isLoading = false;
        animeAdapter.addMany(state as State, action.payload);
      }),
});
