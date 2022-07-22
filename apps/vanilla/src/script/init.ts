import { Sorting } from '@js-camp/core/models/anime';
import { Params } from '@js-camp/core/models/params';

import { LIMIT, OFFSET, PageHandler } from '../namespaces/PageHandler';
import { SubmitHandler } from '../namespaces/submitHandler';
import { getAnimeById, updateTable } from '../services/fetchAnime';

import { minimizeImage } from './effect';
import { ANIME_KEY } from './constants/localStorageName';
import { renderDetail } from './renderDetail';
import { renderHeader, renderOrderOptions, renderPagination, renderSortOptions, renderUserData } from './renderToUI';
import { HOME_PAGE } from './constants/redirectUrl';

/** Number of columns of anime table. */
export const NUMBER_OF_COLUMNS = 6;

/** Init event listener for pagination and render it to DOM. */
export function initPagination(): void {
  const firstPageButton = document.querySelector('.first-page-button');
  firstPageButton?.addEventListener('click', PageHandler.goToFirstPage);
  const lastPageButton = document.querySelector('.last-page-button');
  lastPageButton?.addEventListener('click', PageHandler.goToLastPage);
  renderPagination();
}

/** Init query option. */
export function initQuery(): void {
  renderOrderOptions();
  renderSortOptions();
}

/** Init anime table. */
export function initAnimeTable(): void {
  const tableRow = document.querySelector('.table__row');
  if (tableRow !== null) {
    for (let i = 0; i < NUMBER_OF_COLUMNS; i++) {
      const loadingImage = document.createElement('img');
      loadingImage.src = 'https://img.idesign.vn/2018/10/23/id-loading-1.gif';
      loadingImage.alt = 'Loading...';
      loadingImage.classList.add('table__row-image');
      const cell = document.createElement('td');
      cell.classList.add('table__row-content');
      cell.append(loadingImage);
      tableRow.append(cell);
    }
  } else {
    throw new Error('Cannot get table row element in DOM!');
  }
  updateTable(DEFAULT_QUERIES, 1);
}

/** Init event for login form. */
export function initLoginForm(): void {
  const form = document.querySelector('.form');
  if (form !== null) {
    (form as HTMLFormElement).addEventListener('submit', SubmitHandler.submitLoginForm);
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
  renderHeader();
  renderUserData();
}

/** Init detail page for anime. */
export async function initDetailPage(): Promise<void> {
  renderHeader();
  const backdrop = document.querySelector('.backdrop');
  backdrop?.addEventListener('click', minimizeImage);
  const animeId = localStorage.getItem(ANIME_KEY);
  if (animeId === null) {
    location.replace(HOME_PAGE);
    return;
  }
  const animeData = await getAnimeById(animeId);
  renderDetail(animeData);
}

/** Default data for queries. */
export const DEFAULT_QUERIES = new Params({
  offset: OFFSET,
  limit: LIMIT,
  ordering: Sorting.Default,
});
