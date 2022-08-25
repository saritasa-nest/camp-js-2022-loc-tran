import { FormError } from '@js-camp/core/models/httpError';

/** Auth state. */
export interface AuthState {

  /** Check user is logged in or not. */
  readonly isAuth: boolean;

  /** Error. */
  readonly error?: FormError;

  /** Whether the genres are loading or not. */
  readonly isLoading: boolean;
}

export const initialState: AuthState = {
  isLoading: false,
  isAuth: false,
};
