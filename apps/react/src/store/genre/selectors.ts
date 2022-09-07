import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

import { genreAdapter } from './state';

const { selectAll } = genreAdapter.getSelectors();

/** Selects all genres from store. */
export const selectGenres = createSelector(
  (state: RootState) => selectAll(state.genres),
  genres => genres,
);

/** Selects genres loading state. */
export const selectAreGenresLoading = createSelector(
  (state: RootState) => state.genres.isLoading,
  isLoading => isLoading,
);
