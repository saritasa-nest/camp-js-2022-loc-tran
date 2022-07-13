import { submitLoginForm, submitRegisterForm } from './handleSubmit';
import { renderUserData } from './renderToUI';

/** Init event for login form. */
export function initLoginForm(): void {
  const form = document.querySelector('.form');
  if (form !== null) {
    (form as HTMLFormElement).addEventListener('submit', submitLoginForm);
  }
}

/** Init event for register form. */
export function initRegisterForm(): void {
  const form = document.querySelector('.form');
  if (form !== null) {
    (form as HTMLFormElement).addEventListener('submit', submitRegisterForm);
  }
}

/** Init data for user profile. */
export function initHomeProfile(): void {
  renderUserData();
}
