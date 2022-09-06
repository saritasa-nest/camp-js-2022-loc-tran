import { createSlice } from '@reduxjs/toolkit';

import { fetchAnimeDetail } from './dispatchers';
import { animeDetailAdapter, initialState, State } from './state';

export const animeDetailSlice = createSlice({
  name: 'animeDetail',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchAnimeDetail.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAnimeDetail.fulfilled, (state, action) => {
        animeDetailAdapter.addOne(state as State, action.payload);
        state.isLoading = false;
      })
      .addCase(fetchAnimeDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
