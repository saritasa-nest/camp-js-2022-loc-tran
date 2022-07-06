import { LIMIT } from './constants';

/**
 * Generate api address with query string.
 * @param offset Index of first anime request.
 * @param limit Max number of anime in response.
 * @param sorting Ordering type.
 */
export function generateUrl(offset: number, limit: number = LIMIT, sorting: string): string {
  let offsetAfterCheck = offset;
  if (!offset) {
    const currentPage = localStorage.getItem('ANIME_PAGE') ?? '1';
    offsetAfterCheck = (Number.parseInt(currentPage, 10) - 1) * LIMIT;
  }
  return `${import.meta.env.VITE_API_URL}?limit=${limit}&offset=${offsetAfterCheck}&ordering=${sorting ?? ''}`;
}
