import { SubmitHandler } from '../namespaces/submitHandler';

import { renderUserData } from './renderToUI';

/** Init event for login form. */
export function initLoginForm(): void {
  const form = document.querySelector<HTMLFormElement>('.form');
  if (form !== null) {
    addEventListener('submit', SubmitHandler.submitLoginForm);
  }
}

/** Init event for register form. */
export function initRegisterForm(): void {
  const form = document.querySelector<HTMLFormElement>('.form');
  if (form !== null) {
    form.addEventListener('submit', SubmitHandler.submitRegisterForm);
  }
}

/** Init data for user profile. */
export function initHomeProfile(): void {
  renderUserData();
}
