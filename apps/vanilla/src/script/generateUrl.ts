import { Query } from '@js-camp/core/models/query';

import { LIMIT } from './constants';

/**
 * Generate api address with query string.
 * @param query Object store query variable.
 */
export function generateUrl(query: Query): string {
  let { offset, limit, sorting, ordering } = query;
  if (offset === -1) {
    const currentPage = localStorage.getItem('ANIME_PAGE') ?? '1';
    offset = (Number.parseInt(currentPage, 10) - 1) * LIMIT;
  }
  if (limit === -1) {
    limit = LIMIT;
  }
  if (sorting === '') {
    sorting = localStorage.getItem('ANIME_SORT') ?? '';
  }
  if (ordering === '') {
    ordering = localStorage.getItem('ANIME_ORDER') ?? '';
  }
  return `${import.meta.env.VITE_API_URL}?limit=${limit}&offset=${offset}&ordering=${ordering}${sorting ?? ''}`;
}
