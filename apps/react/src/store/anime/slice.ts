import { createSlice } from '@reduxjs/toolkit';

import { addAnime, deleteAnime, editAnime, fetchAnime, fetchMoreAnime, postAnimePoster } from './dispatchers';
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
      })
      .addCase(deleteAnime.pending, state => {
        state.isEditing = true;
      })
      .addCase(deleteAnime.fulfilled, (state, action) => {
        animeAdapter.removeOne(state as State, action.payload);
        state.isEditing = false;
      })
      .addCase(editAnime.pending, state => {
        state.isEditing = true;
      })
      .addCase(editAnime.rejected, (state, action) => {
        state.isEditing = false;
        state.error = action.payload;
      })
      .addCase(editAnime.fulfilled, (state, action) => {
        state.isEditing = false;
        animeAdapter.setOne(state as State, action.payload);
      })
      .addCase(addAnime.rejected, (state, action) => {
        state.isEditing = false;
        state.error = action.payload;
      })
      .addCase(addAnime.pending, state => {
        state.isEditing = true;
      })
      .addCase(addAnime.fulfilled, (state, action) => {
        animeAdapter.addOne(state as State, action.payload);
        state.isEditing = false;
      })
      .addCase(postAnimePoster.pending, state => {
        state.isPostingPoster = true;
      })
      .addCase(postAnimePoster.fulfilled, state => {
        state.isPostingPoster = false;
      }),
});
