import { Anime } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';

import { FilterHandler } from '../namespaces/FilterHandler';

import { PageHandler } from '../namespaces/PageHandler';
import { SortHandler } from '../namespaces/SortHandler';

import { PAGE_STEP, LIMIT, SORT_OPTIONS, ORDER_OPTIONS, Sorting, DEFAULT_ORDERING, DEFAULT_FILTERING, FILTER_OPTIONS, FILTER_LS, ORDER_LS, SORT_LS } from './constants';

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
      <td><img class="table__row-image" src="${anime.image}"/></td>
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
  const count = Number.parseInt(localStorage.getItem('COUNT') ?? '0', 10);
  if (pagination !== null) {
    pagination.innerHTML = '';
    const currentPage = Number.parseInt(localStorage.getItem('ANIME_PAGE') ?? '1', 10);
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

/** Create filter element for filtering. */
export function renderFilterOptions(): void {
  const initFilter = localStorage.getItem(FILTER_LS) ?? DEFAULT_FILTERING;
  const filterNode = document.querySelector('.query__label-filter');
  if (filterNode !== null) {
    const select = document.createElement('select');
    FILTER_OPTIONS.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.innerHTML = option.title;
      optionElement.defaultSelected = initFilter === option.value;
      select.append(optionElement);
    });
    select.classList.add('filter');
    select.addEventListener('change', FilterHandler.changeFiltering);
    filterNode.append(select);
  } else {
    throw new Error('Cannot get filter element in DOM');
  }
}
