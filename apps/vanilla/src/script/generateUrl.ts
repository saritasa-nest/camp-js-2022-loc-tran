import { OrderingType, Query } from '@js-camp/core/models/query';

import { DECIMAL, DEFAULT_PAGE, LIMIT, NULL_LIMIT, NULL_OFFSET, NULL_SORTING } from './constants';

/**
 * Generate api address with query string.
 * @param query Object store query variable.
 */
export function generateUrl(query: Query): string {
  let { offset, limit, sorting, ordering } = query;
  if (offset === NULL_OFFSET) {
    const currentPage = localStorage.getItem('ANIME_PAGE') ?? DEFAULT_PAGE.toString();
    offset = (Number.parseInt(currentPage, DECIMAL) - 1) * LIMIT;
  }
  if (limit === NULL_LIMIT) {
    limit = LIMIT;
  }
  if (sorting === NULL_SORTING) {
    sorting = localStorage.getItem('ANIME_SORT') ?? NULL_SORTING;
  }
  if (ordering === OrderingType.Empty) {
    ordering = OrderingType[localStorage.getItem('ANIME_ORDER') as keyof typeof OrderingType] ?? OrderingType.Empty;
  }
  return `/api/v1/anime/anime/?limit=${limit}&offset=${offset}&ordering=${ordering}${sorting ?? ''}`;
}
