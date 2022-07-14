import { Queries } from '@js-camp/core/models/query';

import { renderAnime, renderPagination } from './renderToDOM';
import { fetchAnime } from './fetchAnime';
import { generateUrl } from './generateUrl';
import { ANIME_ROUTE, COUNT_LS, DECIMAL, DEFAULT_OFFSET, DEFAULT_ORDERING, DEFAULT_PAGE, DEFAULT_QUERIES, DEFAULT_SORTING, LIMIT, LIMIT_HEADER, LIMIT_LS, NEXT_PAGE_LS, OFFSET_HEADER, OFFSET_LS, ORDER_LS, PAGE_LS, PREVIOUS_PAGE_LS, SORT_HEADER, SORT_LS } from './constants';
import { generateQuery } from './helpers';

/**
 * Update Anime data after change something like sort or page.
 * @param url Api address.
 */
export async function updateAnime(url: string): Promise<void> {
  const data = await fetchAnime(url);

  if (data instanceof Error) {
    throw new Error(data.message);
  }

  localStorage.setItem(NEXT_PAGE_LS, data.next ?? '');
  localStorage.setItem(PREVIOUS_PAGE_LS, data.previous ?? '');
  localStorage.setItem(COUNT_LS, data.count.toString());
  renderAnime(data);

  renderPagination();
}

/**
 * Get new data for next page.
 * @param newPage Next page number.
 */
export function choosePage(newPage: number): void {
  localStorage.setItem(PAGE_LS, newPage.toString());

  const queries: Queries = {
    queryList: [
      generateQuery(OFFSET_HEADER, LIMIT * (newPage - 1), OFFSET_LS),
      generateQuery(LIMIT_HEADER, LIMIT, LIMIT_LS),
    ],
  };
  updateAnime(generateUrl(ANIME_ROUTE, queries));
}

/** Get new data for first page. */
export function goToFirstPage(): void {
  localStorage.setItem(PAGE_LS, DEFAULT_PAGE.toString());
  updateAnime(generateUrl(ANIME_ROUTE, DEFAULT_QUERIES));
}

/** Get new data for last page. */
export function goToLastPage(): void {
  const count = localStorage.getItem(COUNT_LS);
  if (count != null) {
    const page = Math.floor(Number.parseInt(count, DECIMAL) / LIMIT);
    localStorage.setItem(PAGE_LS, page.toString());
    const offset = (page - 1) * LIMIT;

    const queries: Queries = {
      queryList: [
        generateQuery(OFFSET_HEADER, offset, OFFSET_LS),
        generateQuery(LIMIT_HEADER, LIMIT, LIMIT_LS),
      ],
    };
    updateAnime(generateUrl(ANIME_ROUTE, queries));
  }
}

/** Change sorting type. */
export function changeSorting(): void {
  let sortOption = document.querySelector<HTMLSelectElement>('.sort')?.value;
  const orderOption = document.querySelector<HTMLSelectElement>('.order')?.value;
  if (sortOption !== null && orderOption !== null) {
    sortOption = `${orderOption}${sortOption}`;
    localStorage.setItem(SORT_LS, sortOption ?? DEFAULT_SORTING);
    localStorage.setItem(ORDER_LS, orderOption ?? DEFAULT_ORDERING);

    const queries: Queries = {
      queryList: [
        generateQuery(OFFSET_HEADER, DEFAULT_OFFSET, OFFSET_LS),
        generateQuery(LIMIT_HEADER, LIMIT, LIMIT_LS),
        generateQuery(SORT_HEADER, sortOption ?? DEFAULT_ORDERING, SORT_LS, DEFAULT_ORDERING),
      ],
    };
    updateAnime(generateUrl(ANIME_ROUTE, queries));
  }
}
