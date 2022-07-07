import { Query } from '@js-camp/core/models/query';

import { renderAnime, renderPagination } from './renderToDOM';
import { fetchAnime } from './fetchAnime';
import { generateUrl } from './generateUrl';
import { DEFAULT_QUERY, LIMIT } from './constants';

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

  const query: Query = {
    offset: LIMIT * (newPage - 1),
    limit: LIMIT,
    sorting: '',
    ordering: '',
  };
  updateAnime(generateUrl(query));
}

/** Get new data for first page. */
export function goToFirstPage(): void {
  localStorage.setItem('ANIME_PAGE', '1');
  updateAnime(generateUrl(DEFAULT_QUERY));
}

/** Get new data for last page. */
export function goToLastPage(): void {
  const count = localStorage.getItem('COUNT');
  if (count != null) {
    const page = Math.floor(Number.parseInt(count, 10) / LIMIT);
    localStorage.setItem('ANIME_PAGE', page.toString());
    const offset = (page - 1) * LIMIT;
    const query: Query = {
      offset,
      limit: LIMIT,
      sorting: '',
      ordering: '',
    };
    updateAnime(generateUrl(query));
  }
}

/** Change sorting type. */
export function changeSorting(): void {
  const sortOption = document.querySelector<HTMLSelectElement>('#sort')?.value;
  localStorage.setItem('ANIME_SORT', sortOption ?? '');
  const query: Query = {
    offset: -1,
    limit: -1,
    sorting: sortOption ?? '',
    ordering: '',
  };
  updateAnime(generateUrl(query));
}

/** Change ordering type. */
export function changeOrdering(): void {
  const orderOption = document.querySelector<HTMLSelectElement>('#order')?.value;
  localStorage.setItem('ANIME_ORDER', orderOption ?? '');
  const query: Query = {
    offset: -1,
    limit: -1,
    sorting: '',
    ordering: orderOption ?? '',
  };
  updateAnime(generateUrl(query));
}
