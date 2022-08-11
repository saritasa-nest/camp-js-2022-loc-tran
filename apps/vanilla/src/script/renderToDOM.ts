import { Anime, Sorting } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';
import { SelectOption } from '@js-camp/core/models/selectOption';

import { LIMIT, PageHandler } from '../namespaces/PageHandler';
import { SortHandler } from '../namespaces/SortHandler';

/** Pagination config constants. */
export const PAGE_STEP = 3;

/** Options for sorting. */
export const SORT_OPTIONS: readonly SelectOption[] = [
  {
    title: 'Default',
    value: Sorting.Default,
  },
  {
    title: 'Title in English',
    value: Sorting.EnglishTitle,
  },
  {
    title: 'Aired day',
    value: Sorting.AiredStart,
  },
  {
    title: 'Status',
    value: Sorting.Status,
  },
];

/** Options for ordering. */
export const ORDER_OPTIONS: readonly SelectOption[] = [
  {
    title: 'Ascending',
    value: '',
  },
  {
    title: 'Descending',
    value: '-',
  },
];

/**
 * Print anime list to DOM.
 * @param paginationAnime Store anime data response from api.
 */
export function renderAnime(paginationAnime: Pagination<Anime>): void {
  const table = document.querySelector('.table');
  if (table != null) {
    const htmlString = `<tr class="table__head">
    <th class="table__head-title">Image</th>
    <th class="table__head-title">Title Eng</th>
    <th class="table__head-title">Title Jap</th>
    <th class="table__head-title">Aired start</th>
    <th class="table__head-title">Type</th>
    <th class="table__head-title">Status</th>
  </tr>`;
    table.innerHTML = htmlString;
    paginationAnime.results.forEach((anime: Anime) => {
      const row = document.

export function goToPageByNum(page: number): any {
        throw new Error('Function not implemented.');
      }
createElement('tr');
      row.classList.add('table__row');
      row.innerHTML = `<td><img class="table__row-image" src="${anime.image}"/></td>
      <td>${anime.titleEnglish ?? ''}</td>
      <td>${anime.titleJapanese ?? ''}</td>
      <td>${anime.aired.start.toLocaleString()}</td>
      <td>${anime.type}</td>
      <td>${anime.status}</td>`;
      table.append(row);
    });
  }
}

/** Data of pagination needed for render pagination. */
export interface PaginationData {

  /** Number of anime in list. */
  count: number;

  /** Current page of table. */
  currentPage: number;
}

/**
 * Render pagination to DOM.
 * @param count Number of anime in list.
 * @param currentPage Current page of table.
 */
export function renderPagination({ count, currentPage }: PaginationData): void {
  const pagination = document.querySelector('.pagination__numeric');
  if (pagination !== null) {
    pagination.innerHTML = '';
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
  if (sortNode !== null) {
    const select = document.createElement('select');
    SORT_OPTIONS.forEach(sortOption => {
      const optionElement = document.createElement('option');
      optionElement.value = sortOption.value;
      optionElement.innerHTML = sortOption.title;
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
  const orderNode = document.querySelector('.query__label-order');
  if (orderNode !== null) {
    const select = document.createElement('select');
    ORDER_OPTIONS.forEach(orderOption => {
      const optionElement = document.createElement('option');
      optionElement.value = orderOption.value;
      optionElement.innerHTML = orderOption.title;
      select.append(optionElement);
    });
    select.classList.add('order');
    select.addEventListener('change', SortHandler.changeSorting);
    orderNode.append(select);
  } else {
    throw new Error('Cannot get order element in DOM');
  }
}
