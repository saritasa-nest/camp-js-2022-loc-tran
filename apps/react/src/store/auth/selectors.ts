import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

/** Selects authorization loading state. */
export const selectAreAuthLoading = createSelector(
  (state: RootState) => state.auth.isLoading,
  isLoading => isLoading,
);

/** Selects error authorization. */
export const selectAuthError = createSelector(
  (state: RootState) => state.auth.error,
  error => error,
);
