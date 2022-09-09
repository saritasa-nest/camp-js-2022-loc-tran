import { createSelector, EntityId } from '@reduxjs/toolkit';

import { RootState } from '../store';

import { animeDetailAdapter } from './state';

const { selectById } = animeDetailAdapter.getSelectors();

/** Selects anime list. */
export const selectAnimeDetail = createSelector(
  (state: RootState, id: EntityId) => selectById(state.animeDetail, id),
  animeDetail => animeDetail,
);

/** Selects anime list loading state. */
export const selectIsAnimeDetailLoading = createSelector(
  (state: RootState) => state.animeDetail.isLoading,
  isLoading => isLoading,
);

export const selectIsPostingPoster = createSelector(
  (state: RootState) => state.animeList.isPostingPoster,
  isPosting => isPosting,
);
