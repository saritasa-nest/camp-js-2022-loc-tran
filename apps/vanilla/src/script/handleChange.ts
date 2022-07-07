import { renderAnime, renderPagination } from './renderToDOM';
import { fetchAnime } from './fetchAnime';
import { generateUrl } from './generateUrl';
import { LIMIT } from './constants';

/**
 * Update Anime data after change something like sort or page.
 * @param url Api address.
 */
export async function updateAnime(url: string): Promise<void> {
  const data = await fetchAnime(url);
  if (!(data instanceof Error)) {
    localStorage.setItem('NEXT_PAGE_ANIME', data.next ?? '');
    localStorage.setItem('PREVIOUS_PAGE_ANIME', data.previous ?? '');
    localStorage.setItem('COUNT', data.count.toString());
    renderAnime(data);
  }
  renderPagination();
}

/**
 * Get new data for next page.
 * @param newPage Next page number.
 */
export function choosePage(newPage: number): void {
  localStorage.setItem('ANIME_PAGE', newPage.toString());
  updateAnime(generateUrl(LIMIT * (newPage - 1)));
}

/** Get new data for first page. */
export function goToFirstPage(): void {
  localStorage.setItem('ANIME_PAGE', '1');
  updateAnime(generateUrl());
}

/** Get new data for last page. */
export function goToLastPage(): void {
  const count = localStorage.getItem('COUNT');
  if (count) {
    const page = Math.floor(Number.parseInt(count, 10) / LIMIT);
    localStorage.setItem('ANIME_PAGE', page.toString());
    const offset = (page - 1) * LIMIT;
    updateAnime(generateUrl(offset));
  }
}

/** Change sorting type. */
export function changeSorting(): void {
  const sortOption = document.querySelector<HTMLSelectElement>('#sort')?.value;
  localStorage.setItem('ANIME_SORT', sortOption ?? '');
  updateAnime(generateUrl(undefined, undefined, sortOption));
}

/** Change ordering type. */
export function changeOrdering(): void {
  const orderOption = document.querySelector<HTMLSelectElement>('#order')?.value;
  localStorage.setItem('ANIME_ORDER', orderOption ?? '');
  updateAnime(generateUrl(undefined, undefined, undefined, orderOption));
}
