import { AnimeDetail } from '@js-camp/core/models/animeDetail';
import { createEntityAdapter } from '@reduxjs/toolkit';

export const animeDetailAdapter = createEntityAdapter<AnimeDetail>({
  selectId: animeDetail => animeDetail.id,
});

/** Anime state. */
export interface AnimeDetailState {

  /** Error. */
  readonly error?: string;

  /** Error code. */
  readonly errorCode?: number;

  /** Whether the anime list are loading or not. */
  readonly isLoading: boolean;
}

export const initialState = animeDetailAdapter.getInitialState<AnimeDetailState>({
  isLoading: false,
});

export type State = typeof initialState;
