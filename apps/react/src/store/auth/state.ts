import { FormError } from '@js-camp/core/models/httpError';
import { Token } from '@js-camp/core/models/token';

import { TokenService } from '../../api/services/tokenService';

/** Auth state. */
export interface AuthState {

  /** Tokens data. */
  readonly tokens: Promise<Token | null>;

  /** Check user is logged in or not. */
  readonly isAuth: boolean;

  /** Error. */
  readonly error?: FormError;

  /** Whether the genres are loading or not. */
  readonly isLoading: boolean;
}

export const initialState: AuthState = {
  isLoading: false,
  tokens: TokenService.getTokensFromStorage(),
  isAuth: TokenService.getTokensFromStorage() !== null,
};
