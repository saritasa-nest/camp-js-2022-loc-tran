import { Anime } from '@js-camp/core/models/anime';

/** Anime state. */
export interface AnimeState {

  /** Anime list. */
  readonly animeList: Anime[];

  /** Error. */
  readonly error?: string;

  /** Whether the anime list are loading or not. */
  readonly isLoading: boolean;

  /** Current page of anime list. */
  readonly currentPage: number;
}

export const initialState: AnimeState = {
  isLoading: false,
  animeList: [],
  currentPage: 0,
};
