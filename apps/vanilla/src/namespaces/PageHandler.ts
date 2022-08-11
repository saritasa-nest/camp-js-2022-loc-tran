import { Sorting } from '@js-camp/core/models/anime';
import { PaginationParams } from '@js-camp/core/models/paginationParams';

import { COUNT_KEY } from '../script/constants/localStorageName';
import { SORT_QUERY } from '../script/constants/urlParamsKey';
import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';
import { UrlSearch } from '../utils/urlSearchParams';

/** Value for page. */
export const FIRST_PAGE = 1;
export const LIMIT = 25;
export const OFFSET = 0;

/** Default values of query if user don't pass any value. */
export const DEFAULT_ORDERING = Sorting.Default;

export namespace PageHandler {

  /**
   * Get data for new page by page number.
   * @param newPage New page number.
   */
  export function goToNextPage(newPage: number): void {
    const params = new Params({
      offset: (LIMIT * (newPage - 1)),
      limit: LIMIT,
      ordering: UrlSearch.getValue(SORT_QUERY) ?? DEFAULT_ORDERING,
    });
    UrlSearch.setUrlSearch(new URLSearchParams({
      page: newPage.toString(),
      ordering: UrlSearch.getValue(SORT_QUERY) ?? DEFAULT_ORDERING,
    }));
    updateTable(params, newPage);
  }

  /** Get new data for first page. */
  export function goToFirstPage(): void {
    goToNextPage(1);
  }

  /** Get new data for last page. */
  export function goToLastPage(): void {
    const count = localStorage.getItem(COUNT_KEY);
    assertNonNullish(count);
    const totalPage = Number.parseInt(count, 10) / LIMIT;
    const page = isNaN(totalPage) ? FIRST_PAGE : Math.ceil(totalPage);
    goToNextPage(page);
  }
}

/**
 * Return last page number was calculated from number of items.
 * @param count Number of items in list with type string.
 */
function getLastPageNumber(count: string): number {
  const page = Number.parseInt(count, DECIMAL) / LIMIT;
  return isNaN(page) ? 1 : Math.ceil(page);
}
