import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

import { animeAdapter } from './state';

const { selectAll } = animeAdapter.getSelectors();

/** Selects anime list. */
export const selectAnimeList = createSelector(
  (state: RootState) => selectAll(state.animeList),
  animeList => animeList,
);

/** Selects anime list loading state. */
export const selectIsAnimeListLoading = createSelector(
  (state: RootState) => state.animeList.isLoading,
  isLoading => isLoading,
);

/** Selects anime editing state. */
export const selectIsEditingAnime = createSelector(
  (state: RootState) => state.animeList.isEditing,
  isEditing => isEditing,
);