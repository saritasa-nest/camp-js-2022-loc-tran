import { Queries } from '@js-camp/core/models/query';

import { renderAnime, renderPagination } from './renderToDOM';
import { fetchAnime } from './fetchAnime';
import { generateUrl } from './generateUrl';
import { ANIME_ROUTE, DECIMAL, DEFAULT_QUERIES, LIMIT, LIMIT_HEADER, NULL_OFFSET, NULL_SORTING, OFFSET_HEADER, SORT_HEADER } from './constants';
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

  localStorage.setItem('NEXT_PAGE_ANIME', data.next ?? '');
  localStorage.setItem('PREVIOUS_PAGE_ANIME', data.previous ?? '');
  localStorage.setItem('COUNT', data.count.toString());
  renderAnime(data);

  renderPagination();
}

/**
 * Get new data for next page.
 * @param newPage Next page number.
 */
export function choosePage(newPage: number): void {
  localStorage.setItem('ANIME_PAGE', newPage.toString());

  const queries: Queries = {
    queryList: [
      generateQuery(OFFSET_HEADER, LIMIT * (newPage - 1), 'ANIME_OFFSET'),
      generateQuery(LIMIT_HEADER, LIMIT, 'ANIME_LIMIT'),
    ],
  };
  updateAnime(generateUrl(ANIME_ROUTE, queries));
}

/** Get new data for first page. */
export function goToFirstPage(): void {
  localStorage.setItem('ANIME_PAGE', '1');
  updateAnime(generateUrl(ANIME_ROUTE, DEFAULT_QUERIES));
}

/** Get new data for last page. */
export function goToLastPage(): void {
  const count = localStorage.getItem('COUNT');
  if (count != null) {
    const page = Math.floor(Number.parseInt(count, DECIMAL) / LIMIT);
    localStorage.setItem('ANIME_PAGE', page.toString());
    const offset = (page - 1) * LIMIT;

    const queries: Queries = {
      queryList: [
        generateQuery(OFFSET_HEADER, offset, 'ANIME_OFFSET'),
        generateQuery(LIMIT_HEADER, LIMIT, 'ANIME_LIMIT'),
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
    localStorage.setItem('ANIME_SORT', sortOption ?? '');
    localStorage.setItem('ANIME_ORDER', orderOption ?? '');

    const queries: Queries = {
      queryList: [
        generateQuery(OFFSET_HEADER, NULL_OFFSET, 'ANIME_OFFSET', NULL_OFFSET),
        generateQuery(LIMIT_HEADER, LIMIT, 'ANIME_LIMIT'),
        generateQuery(SORT_HEADER, sortOption ?? NULL_SORTING, 'ANIME_SORT', NULL_SORTING),
      ],
    };
    updateAnime(generateUrl(ANIME_ROUTE, queries));
  }
}
