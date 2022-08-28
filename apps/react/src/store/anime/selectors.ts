import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

/** Selects anime list. */
export const selectAnimeList = createSelector(
  (state: RootState) => state.animeList.animeList,
  animeList => animeList,
);

/** Selects anime list loading state. */
export const selectIsAnimeListLoading = createSelector(
  (state: RootState) => state.animeList.isLoading,
  isLoading => isLoading,
);

export const selectCurrentPage = createSelector(
  (state: RootState) => state.animeList.currentPage,
  currentPage => currentPage,
);
