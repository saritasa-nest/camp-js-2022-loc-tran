import { loginFormSubmit, registerFormSubmit } from './handleSubmit';

/** Init event for login form. */
export function initLoginForm(): void {
  const form = document.querySelector('.form');
  if (form !== null) {
    (form as HTMLFormElement).addEventListener('submit', loginFormSubmit);
  }
}

/** Init event for register form. */
export function initRegisterForm(): void {
  const form = document.querySelector('.form');
  if (form !== null) {
    (form as HTMLFormElement).addEventListener('submit', registerFormSubmit);
  }
}
