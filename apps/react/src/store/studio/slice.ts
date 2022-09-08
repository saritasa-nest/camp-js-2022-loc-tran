import { createSlice } from '@reduxjs/toolkit';

import { addNewStudio, fetchStudios, fetchStudiosByKey } from './dispatchers';
import { studioAdapter, initialState, State } from './state';

export const studiosSlice = createSlice({
  name: 'studios',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchStudios.pending, state => {
      state.isLoading = true;
    })
    .addCase(fetchStudios.fulfilled, (state, action) => {
      studioAdapter.setAll(state as State, action.payload);
      state.isLoading = false;
    })
    .addCase(fetchStudios.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.isLoading = false;
    })
    .addCase(fetchStudiosByKey.pending, state => {
      state.isLoading = true;
    })
    .addCase(fetchStudiosByKey.fulfilled, (state, action) => {
      studioAdapter.addMany(state as State, action.payload);
      state.isLoading = false;
    })
    .addCase(fetchStudiosByKey.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.isLoading = false;
    })
    .addCase(addNewStudio.pending, state => {
      state.isLoading = true;
    })
    .addCase(addNewStudio.fulfilled, (state, action) => {
      studioAdapter.addOne(state as State, action.payload);
      state.isLoading = false;
    }),
});
