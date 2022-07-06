import { renderAnime, renderPagination } from './renderToDOM';
import { fetchAnime } from './fetchAnime';
import { generateUrl } from './generateUrl';
import { LIMIT, Sorting } from './constants';

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
  console.warn(data);
}

/**
 * Get new data for next page.
 * @param newPage Next page number.
 */
export function goToPage(newPage: number): void {
  localStorage.setItem('ANIME_PAGE', newPage.toString());
  updateAnime(generateUrl(LIMIT * (newPage - 1), LIMIT, Sorting.Default));
  renderPagination();
}

/**
 * Change sorting type.
 * @param option Sorting type.
 */
export function changeOrdering(): void {
  const option = document.querySelector('select')?.value;
  console.log(option)
  updateAnime(generateUrl(0, LIMIT, option ?? ''));
}
