import { createSelector, EntityId } from '@reduxjs/toolkit';

import { RootState } from '../store';

import { animeManagementAdapter } from './state';

const { selectById } = animeManagementAdapter.getSelectors();

/** Selects anime management. */
export const selectAnimeManagement = createSelector(
  (state: RootState, id: EntityId) => selectById(state.animeManagement, id),
  animeManagement => animeManagement,
);

/** Selects anime management loading state. */
export const selectIsAnimeManagementLoading = createSelector(
  (state: RootState) => state.animeManagement.isLoading,
  isLoading => isLoading,
);
