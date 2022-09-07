import { createSlice } from '@reduxjs/toolkit';

import { editAnime, getAnimeManagement } from './dispatchers';
import { animeManagementAdapter, initialState, State } from './state';

export const animeManagementSlice = createSlice({
  name: 'animeManagement',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAnimeManagement.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAnimeManagement.fulfilled, (state, action) => {
        state.isLoading = false;
        animeManagementAdapter.setOne(state as State, action.payload);
      })
      .addCase(editAnime.pending, state => {
        state.isLoading = true;
      })
      .addCase(editAnime.fulfilled, (state, action) => {
        state.isLoading = false;
        animeManagementAdapter.setOne(state as State, action.payload);
      }),
});
