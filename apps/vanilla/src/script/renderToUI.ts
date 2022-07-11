import { getUserData } from '../services/getUserData';

/**
 * Show login error message to UI.
 * @param errorMessage Error message of login.
 */
export function showErrorLogin(errorMessage: string): void {
  const error = document.querySelector('.form__error-login');
  if (error !== null) {
    error.innerHTML = errorMessage;
  }
}

/**
 * Show register error message to UI.
 * @param errorMessage Error message of register.
 */
export function showErrorRegister(errorMessage: string): void {
  const error = document.querySelector('.form__error-register');
  if (error !== null) {
    error.innerHTML = errorMessage;
  }
}

/** Render user data to DOM. */
export async function renderUserData(): Promise<void> {
  const userData = await getUserData();
  const profile = document.querySelector('user');
  if (profile) {
    profile.innerHTML = JSON.stringify(userData);
  }
}
