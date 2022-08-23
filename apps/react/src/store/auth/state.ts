import { Token } from '@js-camp/core/models/token';

/** Auth state. */
export interface AuthState {

  /** Tokens data. */
  readonly tokens: Token;

  /** Error. */
  readonly error?: string;

  /** Whether the genres are loading or not. */
  readonly isLoading: boolean;
}

export const initialState: AuthState = {
  isLoading: false,
  tokens: new Token({
    accessToken: '',
    refreshToken: '',
  }),
};
