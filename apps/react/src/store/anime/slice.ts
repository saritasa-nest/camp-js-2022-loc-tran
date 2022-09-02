import { createSlice } from '@reduxjs/toolkit';

import { fetchAnime, fetchMoreAnime } from './dispatchers';
import { animeAdaptor, initialState, State } from './state';

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
        animeAdaptor.setAll(state as State, action.payload);
        state.isLoading = false;
      })
      .addCase(fetchMoreAnime.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchMoreAnime.fulfilled, (state, action) => {
        animeAdaptor.addMany(state as State, action.payload);
        state.isLoading = false;
      }),
});
