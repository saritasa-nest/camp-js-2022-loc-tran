import { Anime } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';

import { PAGE_STEP, LIMIT, SORT_OPTIONS } from './constants';
import { goToPage, changeOrdering } from './handleChange';

/** Print anime list to DOM.
 * @param paginationAnime Store anime data response from api.
 */
export function renderAnime(paginationAnime: Pagination<Anime>): void {
  const tableRow = document.querySelector('.table');
  if (tableRow) {
    let htmlString = `<tr class="table__head">
    <th>Image</th>
    <th>Title Eng</th>
    <th>Title Jap</th>
    <th>Aired start</th>
    <th>Type</th>
    <th>Status</th>
  </tr>`;
    paginationAnime.results.forEach((anime: Anime) => {
      htmlString += `<tr class="table__row">
      <td><img src="${anime.image}"/></td>
      <td>${anime.titleEng ?? ''}</td>
      <td>${anime.titleJapan ?? ''}</td>
      <td>${new Date(anime.start).toLocaleString()}</td>
      <td>${anime.type}</td>
      <td>${anime.status}</td>
    </tr>`;
    });
    tableRow.innerHTML = htmlString;
  }
}

/**
 * Print pagination to DOM.
 */
export function renderPagination(): void {
  const pagination = document.querySelector('.pagination');
  const count = Number.parseInt(localStorage.getItem('COUNT') ?? '0', 10);
  if (pagination) {
    pagination.innerHTML = '';
    const currentPage = Number.parseInt(localStorage.getItem('ANIME_PAGE') ?? '1', 10);
    const first = currentPage - PAGE_STEP > 0 ? currentPage - PAGE_STEP : 1;
    for (let i = first; i <= first + 6 && i <= Math.ceil(count / LIMIT) + 1; i++) {
      pagination.append(createButtonPagination(i, currentPage === i));
    }
  }
}

/**
 * Create button for pagination.
 * @param page Page number of the button.
 * @param isActive Add class for active page.
 */
function createButtonPagination(page: number, isActive: boolean): HTMLElement {
  const button = document.createElement('div');
  if (isActive) {
    button.classList.add('active');
  }
  button.classList.add('pagination__button');
  button.innerHTML = `${page}`;
  button.addEventListener('click', goToPage.bind(null, page));
  return button;
}

/**
 * Create select element for ordering.
 */
export function renderSortOptions(): void {
  const selectNode = document.querySelector('.select');
  if (selectNode) {
    const select = document.createElement('select');
    SORT_OPTIONS.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.innerHTML = option.title;
      select.append(optionElement);
    });
    select.addEventListener('change', changeOrdering);
    selectNode.append(select);
  }
}
