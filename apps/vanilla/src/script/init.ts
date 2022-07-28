import { Sorting } from '@js-camp/core/models/anime';
import { PaginationParams } from '@js-camp/core/models/paginationParams';

import { DECIMAL, FIRST_PAGE, LIMIT, PageHandler } from '../namespaces/PageHandler';
import { SearchHandler } from '../namespaces/SearchHandler';
import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';
import { UrlSearch } from '../utils/urlSearchParams';

import { PAGE_QUERY, SORT_QUERY } from './localStorageName';

import { renderOrderOptions, renderPagination, renderSortOptions } from './renderToDOM';

/** Number of columns of anime table. */
export const NUMBER_OF_COLUMNS = 6;

/** Default search query. */
export const DEFAULT_SEARCH_QUERY = '';

/** Init event listener for pagination and render it to DOM. */
export function initPagination(): void {
  const firstPageButton = document.querySelector('.pagination__button-first');
  firstPageButton?.addEventListener('click', PageHandler.goToFirstPage);
  const lastPageButton = document.querySelector('.pagination__button-last');
  lastPageButton?.addEventListener('click', PageHandler.goToLastPage);
  renderPagination({ count: 0, currentPage: 0 });
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

/** Init event for search button. */
export function initSearchButton(): void {
  const searchForm = document.querySelector('.search');
  assertNonNullish(searchForm);
  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    SearchHandler.handleSearch();
  });
}

/** Default data for queries. */
export const DEFAULT_QUERIES = new PaginationParams({
  offset: (LIMIT * (Number.parseInt(UrlSearch.getValue(PAGE_QUERY) ?? FIRST_PAGE.toString(), DECIMAL) - 1)),
  limit: LIMIT,
  ordering: UrlSearch.getValue(SORT_QUERY) ?? Sorting.Default,
  search: DEFAULT_SEARCH_QUERY,
});
