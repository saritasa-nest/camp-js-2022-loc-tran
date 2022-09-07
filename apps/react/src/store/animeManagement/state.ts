import { AnimeManagement } from '@js-camp/core/models/animeManagement';
import { createEntityAdapter } from '@reduxjs/toolkit';

export const animeManagementAdapter = createEntityAdapter<AnimeManagement>({
  selectId: animeManagement => animeManagement.id,
});

/** Anime management state. */
export interface AnimeManagementState {

  /** Error. */
  readonly error?: string;

  /** Whether the anime management are loading or not. */
  readonly isLoading: boolean;
}

export const initialState = animeManagementAdapter.getInitialState<AnimeManagementState>({
  isLoading: false,
});

export type State = typeof initialState;
