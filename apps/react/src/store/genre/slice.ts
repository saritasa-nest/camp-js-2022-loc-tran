import { createSlice } from '@reduxjs/toolkit';

import { addNewGenre, fetchGenres, fetchGenresByKey } from './dispatchers';
import { genreAdapter, initialState, State } from './state';

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchGenres.pending, state => {
      state.isLoading = true;
    })
    .addCase(fetchGenres.fulfilled, (state, action) => {
      genreAdapter.setAll(state as State, action.payload);
      state.isLoading = false;
    })
    .addCase(fetchGenres.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.isLoading = false;
    })
    .addCase(fetchGenresByKey.pending, state => {
      state.isLoading = true;
    })
    .addCase(fetchGenresByKey.fulfilled, (state, action) => {
      genreAdapter.addMany(state as State, action.payload);
      state.isLoading = false;
    })
    .addCase(fetchGenresByKey.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.isLoading = false;
    })
    .addCase(addNewGenre.pending, state => {
      state.isLoading = true;
    })
    .addCase(addNewGenre.fulfilled, (state, action) => {
      genreAdapter.addOne(state as State, action.payload);
      state.isLoading = false;
    }),
});
