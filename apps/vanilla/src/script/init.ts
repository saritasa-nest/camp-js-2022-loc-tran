import { Sorting } from '@js-camp/core/models/anime';
import { Params } from '@js-camp/core/models/params';

import { DECIMAL, FIRST_PAGE, LIMIT, PageHandler } from '../namespaces/PageHandler';
import { updateTable } from '../services/fetchAnime';
import { UrlSearch } from '../utils/urlSearchParams';

import { PAGE_QUERY, SORT_QUERY } from './localStorageName';

import { renderOrderOptions, renderPagination, renderSortOptions } from './renderToDOM';

/** Number of columns of anime table. */
export const NUMBER_OF_COLUMNS = 6;

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
  const page = Number.parseInt(UrlSearch.getValue(PAGE_QUERY) ?? FIRST_PAGE.toString(), DECIMAL);
  updateTable(DEFAULT_QUERIES, page);
}

/** Default data for queries. */
export const DEFAULT_QUERIES = new Params({
  offset: (LIMIT * (Number.parseInt(UrlSearch.getValue(PAGE_QUERY) ?? FIRST_PAGE.toString(), DECIMAL) - 1)),
  limit: LIMIT,
  ordering: UrlSearch.getValue(SORT_QUERY) ?? Sorting.Default,
});
