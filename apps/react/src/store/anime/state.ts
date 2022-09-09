import { Anime } from '@js-camp/core/models/anime';
import { createEntityAdapter } from '@reduxjs/toolkit';

export const animeAdapter = createEntityAdapter<Anime>();

/** Anime state. */
export interface AnimeState {

  /** Error. */
  readonly error?: string;

  /** Whether the anime list are loading or not. */
  readonly isLoading: boolean;

  /** Editing item or not. */
  readonly isEditing: boolean;

  /** Posting poster or not. */
  readonly isPostingPoster: boolean;
}

export const initialState = animeAdapter.getInitialState<AnimeState>({
  isLoading: false,
  isPostingPoster: false,
  isEditing: false,
});

export type State = typeof initialState;
