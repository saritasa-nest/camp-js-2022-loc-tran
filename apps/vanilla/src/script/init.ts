import { Sorting } from '@js-camp/core/models/anime';
import { PaginationParams } from '@js-camp/core/models/paginationParams';

import { FIRST_PAGE, LIMIT, PageHandler } from '../namespaces/PageHandler';
import { getAnimeById, updateTable } from '../services/fetchAnime';
import { UrlSearch } from '../utils/urlSearchParams';
import { SubmitHandler } from '../namespaces/submitHandler';

import { minimizeImage } from './effect';
import { ANIME_KEY } from './constants/localStorageName';
import { renderDetail } from './renderDetail';
import { renderHeader, renderOrderOptions, renderPagination, renderSortOptions, renderUserData } from './renderToUI';
import { HOME_PAGE } from './constants/redirectUrl';
import { PAGE_QUERY, SORT_QUERY } from './constants/urlParamsKey';

/** Number of columns of anime table. */
export const NUMBER_OF_COLUMNS = 6;

/** Init event listener for pagination and render it to DOM. */
export function initPagination(): void {
  const firstPageButton = document.querySelector('.pagination__button-first');
  firstPageButton?.addEventListener('click', PageHandler.goToFirstPage);
  const lastPageButton = document.querySelector('.pagination__button-last');
  lastPageButton?.addEventListener('click', PageHandler.goToLastPage);
  renderPagination(1);
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
  const page = Number.parseInt(UrlSearch.getValue(PAGE_QUERY) ?? FIRST_PAGE.toString(), 10);
  updateTable(DEFAULT_QUERIES, page);
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
export const DEFAULT_QUERIES = new PaginationParams({
  offset: (LIMIT * (Number.parseInt(UrlSearch.getValue(PAGE_QUERY) ?? FIRST_PAGE.toString(), 10) - 1)),
  limit: LIMIT,
  ordering: UrlSearch.getValue(SORT_QUERY) ?? Sorting.Default,
});
