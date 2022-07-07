import { goToFirstPage, goToLastPage } from './handleChange';
import { renderOrderOptions, renderPagination, renderSortOptions } from './renderToDOM';

/** Init event listener for pagination and render it to DOM. */
export function initPagination(): void {
  const firstPageButton = document.querySelector('#first-page-button');
  firstPageButton?.addEventListener('click', goToFirstPage);
  const lastPageButton = document.querySelector('#last-page-button');
  lastPageButton?.addEventListener('click', goToLastPage);
  renderPagination();
}

/** Init filter option. */
export function initFilter(): void {
  renderOrderOptions();
  renderSortOptions();
}
