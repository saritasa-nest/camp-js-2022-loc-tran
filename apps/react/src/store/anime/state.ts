import { Anime } from '@js-camp/core/models/anime';
import { createEntityAdapter } from '@reduxjs/toolkit';

export const animeAdaptor = createEntityAdapter<Anime>();

/** Anime state. */
export interface AnimeState {

  /** Error. */
  readonly error?: string;

  /** Whether the anime list are loading or not. */
  readonly isLoading: boolean;
}

export const initialState = animeAdaptor.getInitialState<AnimeState>({
  isLoading: false,
});

export type State = typeof initialState;
