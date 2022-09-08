import { Anime } from '@js-camp/core/models/anime';
import { createEntityAdapter } from '@reduxjs/toolkit';

export const animeAdapter = createEntityAdapter<Anime>();

/** Anime state. */
export interface AnimeState {

  /** Error. */
  readonly error?: string;

  /** Whether the anime list are loading or not. */
  readonly isLoading: boolean;

  /** Deleting item or not. */
  readonly isDeleting: boolean;

  /** Posting poster or not. */
  readonly isPostingPoster: boolean;
}

export const initialState = animeAdapter.getInitialState<AnimeState>({
  isLoading: false,
  isDeleting: false,
  isPostingPoster: false,
});

export type State = typeof initialState;
