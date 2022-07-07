import { LIMIT } from './constants';

/**
 * Generate api address with query string.
 * @param offset Index of first anime request.
 * @param limit Max number of anime in response.
 * @param sorting Sorting type.
 * @param ordering Ordering type.
 */
export function generateUrl(offset = 0, limit: number = LIMIT,
  sorting = localStorage.getItem('ANIME_SORT') ?? '',
  ordering = localStorage.getItem('ANIME_ORDER') ?? ''): string {
  let offsetAfterCheck = offset;
  if (!offset) {
    const currentPage = localStorage.getItem('ANIME_PAGE') ?? '1';
    offsetAfterCheck = (Number.parseInt(currentPage, 10) - 1) * LIMIT;
  }
  return `${import.meta.env.VITE_API_URL}?limit=${limit}&offset=${offsetAfterCheck}&ordering=${ordering}${sorting ?? ''}`;
}
