import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

import { studioAdapter } from './state';

const { selectAll } = studioAdapter.getSelectors();

/** Selects all studios from store. */
export const selectStudios = createSelector(
  (state: RootState) => selectAll(state.studios),
  studios => studios,
);

/** Selects studios loading state. */
export const selectAreStudiosLoading = createSelector(
  (state: RootState) => state.studios.isLoading,
  isLoading => isLoading,
);
