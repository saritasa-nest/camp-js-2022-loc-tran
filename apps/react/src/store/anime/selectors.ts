import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

import { animeAdaptor } from './state';

const { selectAll } = animeAdaptor.getSelectors();

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
