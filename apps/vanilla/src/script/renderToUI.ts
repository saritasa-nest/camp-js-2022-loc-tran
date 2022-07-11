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
