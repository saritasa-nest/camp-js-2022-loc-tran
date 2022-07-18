import { PageHandler } from '../namespaces/PageHandler';
import { SearchHandler } from '../namespaces/SearchHandler';
import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';

import { DEFAULT_QUERIES, NUMBER_OF_COLUMNS } from './constants';
import { renderOrderOptions, renderPagination, renderSortOptions } from './renderToDOM';

/** Init event listener for pagination and render it to DOM. */
export function initPagination(): void {
  const firstPageButton = document.querySelector('.first-page-button');
  firstPageButton?.addEventListener('click', PageHandler.goToFirstPage);
  const lastPageButton = document.querySelector('.last-page-button');
  lastPageButton?.addEventListener('click', PageHandler.goToLastPage);
  renderPagination(0, 0);
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

/** Init event for search button. */
export function initSearchButton(): void {
  const searchButton = document.querySelector('.search__button');
  assertNonNullish(searchButton);
  searchButton.addEventListener('click', SearchHandler.handleSearch);
}

/** Init enter key event  for search input. */
export function initSearchOnEnterKeypress(): void {
  const searchInput = document.querySelector<HTMLInputElement>('.search__input');
  assertNonNullish(searchInput);
  searchInput.addEventListener('keypress', event => SearchHandler.searchByEnter(event));
}
