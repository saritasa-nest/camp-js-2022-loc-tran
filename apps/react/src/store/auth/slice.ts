import { createSlice } from '@reduxjs/toolkit';

import { getAuthState, login, logout, register } from './dispatchers';
import { initialState } from './state';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearErrors(state) {
      state.error = undefined;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, state => {
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, state => {
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getAuthState.pending, state => {
        state.isCheckingAuthorized = true;
      })
      .addCase(getAuthState.fulfilled, (state, action) => {
        state.isCheckingAuthorized = false;
        state.isAuthorized = action.payload;
      })
      .addCase(logout.fulfilled, state => {
        state.isAuthorized = false;
      }),
});

export const { clearErrors } = authSlice.actions;
