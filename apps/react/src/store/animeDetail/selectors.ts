import { createSelector, EntityId } from '@reduxjs/toolkit';

import { RootState } from '../store';

import { animeDetailAdapter } from './state';

const { selectById } = animeDetailAdapter.getSelectors();

/** Selects anime list. */
export const selectAnimeList = createSelector(
  (state: RootState, id: EntityId) => selectById(state.animeDetail, id),
  animeList => animeList,
);

/** Selects anime list loading state. */
export const selectIsAnimeListLoading = createSelector(
  (state: RootState) => state.animeList.isLoading,
  isLoading => isLoading,
);
