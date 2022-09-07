import { Genre } from '@js-camp/core/models/genre';
import { createEntityAdapter } from '@reduxjs/toolkit';

export const genreAdapter = createEntityAdapter<Genre>({
  selectId: genre => genre.id,
});

/** Genres state. */
export interface GenresState {

  /** Error. */
  readonly error?: string;

  /** Whether the genres are loading or not. */
  readonly isLoading: boolean;
}

export const initialState = genreAdapter.getInitialState<GenresState>({
  isLoading: false,
});

export type State = typeof initialState;
