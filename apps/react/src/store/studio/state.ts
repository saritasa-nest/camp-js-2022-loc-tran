import { Studio } from '@js-camp/core/models/studio';
import { createEntityAdapter } from '@reduxjs/toolkit';

export const studioAdapter = createEntityAdapter<Studio>({
  selectId: studio => studio.id,
});

/** Studios state. */
export interface StudiosState {

  /** Error. */
  readonly error?: string;

  /** Whether the studios are loading or not. */
  readonly isLoading: boolean;
}

export const initialState = studioAdapter.getInitialState<StudiosState>({
  isLoading: false,
});

export type State = typeof initialState;
