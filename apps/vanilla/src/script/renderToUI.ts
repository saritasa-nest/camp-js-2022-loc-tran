import { SubmitHandler } from '../namespaces/submitHandler';
import { getUserData } from '../services/getUserData';

/**
 * Show login error message to UI.
 * @param errorList List of error message.
 */
export function showErrorLogin(errorList: readonly string[]): void {
  const error = document.querySelector('.form__error-login');
  const errorMessage = errorList.join('<br>');
  if (error !== null) {
    error.innerHTML = errorMessage;
  }
}

/**
 * Show register error message to UI.
 * @param errorList List of error message.
 */
export function showErrorRegister(errorList: readonly string[]): void {
  const error = document.querySelector('.form__error-register');
  const errorMessage = errorList.join('<br>');
  if (error !== null) {
    error.innerHTML = errorMessage;
  }
}

/** Render authenticated link and message if user is unauthorized. */
export function renderAuthenticatedLink(): void {
  const links = document.querySelector('.links');
  if (links !== null) {
    links.innerHTML = `<a href="/login/">Log in</a>
    <a href="/register/">Sign up</a>`;
  }
  const profile = document.querySelector('.profile');
  if (profile !== null) {
    profile.innerHTML = `<h2 class="profile__message">Log in to view your profile!</h2>`;
  }
}

/** Render user data to DOM. */
export async function renderUserData(): Promise<void> {
  const userData = await getUserData();
  const profile = document.querySelector('.profile');
  if (profile !== null) {
    const links = document.querySelector('.links');
    if (links !== null) {
      const logoutButton = document.createElement('button');
      logoutButton.type = 'button';
      logoutButton.innerHTML = 'Logout';
      logoutButton.classList.add('links__logout');
      logoutButton.addEventListener('click', SubmitHandler.handleLogout);
      links.append(logoutButton);
    }
    profile.innerHTML = `
    <h2 class="profile__title">Your profile</h2>
    <label class="profile__label">
      <span class="profile__label-text">Email: </span>
      <input disabled type="email" class="profile__label-input profile__label-email" value="${userData.email}" />
    </label>
    <label class="profile__label">
      <span class="profile__label-text">First name: </span>
      <input disabled type="text" class="profile__label-input profile__label-firstname" value="${userData.firstName}" />
    </label>
    <label class="profile__label">
      <span class="profile__label-text">Last name: </span>
      <input disabled type="text" class="profile__label-input profile__label-lastname" value="${userData.lastName}" />
    </label>
    <label class="profile__label">
      <span class="profile__label-text">Created at: </span>
      <input disabled type="datetime" class="profile__label-input profile__label-created" value="${userData.created.toLocaleString()}" />
    </label>
    <label class="profile__label">
      <span class="profile__label-text">Last modified at: </span>
      <input disabled type="datetime" class="profile__label-input profile__label-modified" value="${userData.modified.toLocaleString()}"/>
    </label>`;

  }
}
