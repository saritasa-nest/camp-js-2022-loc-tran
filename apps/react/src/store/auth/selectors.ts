import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

/** Selects tokens from store. */
export const selectTokens = createSelector(
  (state: RootState) => state.auth.tokens,
  tokens => tokens,
);

/** Selects authorization loading state. */
export const selectAreAuthLoading = createSelector(
  (state: RootState) => state.auth.isLoading,
  isLoading => isLoading,
);
