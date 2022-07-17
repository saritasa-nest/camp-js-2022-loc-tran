import { Anime } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';
import { Sorting } from '@js-camp/core/models/params';

import { getUserData } from '../services/getUserData';
import { SubmitHandler } from '../namespaces/submitHandler';
import { SortHandler } from '../namespaces/SortHandler';
import { PageHandler } from '../namespaces/PageHandler';

import { PAGE_STEP, LIMIT, SORT_OPTIONS, ORDER_OPTIONS, DEFAULT_ORDERING, ORDER_LS, SORT_LS, DECIMAL, OFFSET, FIRST_PAGE } from './constants';
import { isAuthorized } from './isAuthorized';

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

/**
 * Print anime list to DOM.
 * @param paginationAnime Store anime data response from api.
 */
export function renderAnime(paginationAnime: Pagination<Anime>): void {
  const tableRow = document.querySelector('.table');
  if (tableRow != null) {
    let htmlString = `<tr class="table__head">
    <th class="table__head-title">Image</th>
    <th class="table__head-title">Title Eng</th>
    <th class="table__head-title">Title Jap</th>
    <th class="table__head-title">Aired start</th>
    <th class="table__head-title">Type</th>
    <th class="table__head-title">Status</th>
  </tr>`;
    paginationAnime.results.forEach((anime: Anime) => {
      htmlString += `<tr class="table__row">
      <td><a href='/detail'><img class="table__row-image" src="${anime.image}"/></a></td>
      <td>${anime.titleEnglish ?? ''}</td>
      <td>${anime.titleJapanese ?? ''}</td>
      <td>${anime.aired.start.toLocaleString()}</td>
      <td>${anime.type}</td>
      <td>${anime.status}</td>
    </tr>`;
    });
    tableRow.innerHTML = htmlString;
  }
}

/** Render pagination to DOM. */
export function renderPagination(): void {
  const pagination = document.querySelector('.pagination__numeric');
  const count = Number.parseInt(localStorage.getItem('COUNT') ?? OFFSET.toString(), DECIMAL);
  if (pagination !== null) {
    pagination.innerHTML = '';
    const currentPage = Number.parseInt(localStorage.getItem('ANIME_PAGE') ?? FIRST_PAGE.toString(), 10);
    const first = currentPage - PAGE_STEP > 0 ? currentPage - PAGE_STEP : 1;
    for (let i = first; i <= first + PAGE_STEP * 2 && i <= Math.ceil(count / LIMIT); i++) {
      pagination.append(createButtonPagination(i, currentPage === i));
    }
  } else {
    throw new Error('Cannot get pagination element in DOM');
  }
}

/**
 * Create button for pagination.
 * @param page Page number of the button.
 * @param isActive Add class for active button.
 */
function createButtonPagination(page: number, isActive: boolean): HTMLElement {
  const button = document.createElement('button');
  if (isActive !== false) {
    button.classList.add('pagination__button-active');
  }
  button.classList.add('pagination__button');
  button.innerHTML = `${page}`;
  button.type = 'button';
  button.addEventListener('click', () => PageHandler.goToPageByNum(page));
  return button;
}

/** Create select element for sorting. */
export function renderSortOptions(): void {
  const sortNode = document.querySelector('.query__label-sort');
  const initSort = localStorage.getItem(SORT_LS) ?? Sorting.Default;
  if (sortNode !== null) {
    const select = document.createElement('select');
    SORT_OPTIONS.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.innerHTML = option.title;
      optionElement.defaultSelected = option.value === initSort;
      select.append(optionElement);
    });
    select.addEventListener('change', SortHandler.changeSorting);
    select.classList.add('sort');
    sortNode.append(select);
  } else {
    throw new Error('Cannot get sort element in DOM');
  }
}

/** Create order element for ordering. */
export function renderOrderOptions(): void {
  const initOrder = localStorage.getItem(ORDER_LS) ?? DEFAULT_ORDERING;
  const orderNode = document.querySelector('.query__label-order');
  if (orderNode !== null) {
    const select = document.createElement('select');
    ORDER_OPTIONS.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.innerHTML = option.title;
      optionElement.defaultSelected = initOrder === option.value;
      select.append(optionElement);
    });
    select.classList.add('order');
    select.addEventListener('change', SortHandler.changeSorting);
    orderNode.append(select);
  } else {
    throw new Error('Cannot get order element in DOM');
  }
}

/** Render header at top of page. */
export async function renderHeader(): Promise<void> {
  // Navigation link for anime table and profile.
  const navPage = document.querySelector('.header__nav-page');

  // Navigation link for authorization.
  const navAuth = document.querySelector('.header__nav-authen');
  if (await isAuthorized() === true) {
    navPage?.append(createLink('/', ['header__link', 'header__link-table'], 'Anime table'));
    navPage?.append(createLink('/profile/', ['header__link', 'header__link-profile'], 'Profile'));
    navAuth?.append(createLink('/logout/', ['header__link', 'header__link-logout'], 'Log out'));
  } else {
    navAuth?.append(createLink('/login/', ['header__link', 'header__link-login'], 'Log in'));
    navAuth?.append(createLink('/register/', ['header__link', 'header__link-register'], 'Sign up'));
  }
}

/**
 * Create link for navigation bar on header.
 * @param url Href for a tag.
 * @param classes Class list of link.
 * @param content Content of link.
 */
function createLink(url: string, classes: string[], content: string): HTMLElement {
  const link = document.createElement('a');
  link.href = url;
  classes.forEach(className => {
    link.classList.add(className);
  });
  link.innerHTML = content;
  const result = document.createElement('li');
  result.append(link);
  return result;
}
