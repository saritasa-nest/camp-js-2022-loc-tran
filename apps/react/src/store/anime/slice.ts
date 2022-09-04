import { createSlice } from '@reduxjs/toolkit';

import { fetchAnime } from './dispatchers';
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
      }),
});
