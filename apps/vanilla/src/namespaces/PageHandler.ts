import { Sorting } from '@js-camp/core/models/anime';
import { Params } from '@js-camp/core/models/params';

import { SORT_KEY, COUNT_KEY } from '../script/constants/localStorageName';
import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';

/** Value for page. */
export const FIRST_PAGE = 1;
export const LIMIT = 25;
export const OFFSET = 0;

/** Default values of query if user don't pass any value. */
export const DEFAULT_ORDERING = Sorting.Default;

export namespace PageHandler {

  /**
   * Get new data for next page.
   * @param newPage Next page number.
   */
  export function goToPageByNum(newPage: number): void {
    const params = new Params({
      offset: (LIMIT * (newPage - 1)),
      limit: LIMIT,
      ordering: (localStorage.getItem(SORT_KEY)) ?? DEFAULT_ORDERING,
    });
    updateTable(params, newPage);
  }

  /** Get new data for first page. */
  export function goToFirstPage(): void {
    goToPageByNum(1);
  }

  /** Get new data for last page. */
  export function goToLastPage(): void {
    const count = localStorage.getItem(COUNT_KEY);
    assertNonNullish(count);
    const totalPage = Number.parseInt(count, 10) / LIMIT;
    const page = isNaN(totalPage) ? FIRST_PAGE : Math.ceil(totalPage);
    goToPageByNum(page);
  }
}
