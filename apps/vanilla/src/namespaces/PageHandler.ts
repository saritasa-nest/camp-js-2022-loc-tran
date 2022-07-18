import { Params, Sorting } from '@js-camp/core/models/params';

import { COUNT_LS, DECIMAL, DEFAULT_ORDERING, LIMIT, SORT_LS, SEARCH_QUERY } from '../script/constants';

import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';

export namespace PageHandler {

  /**
   * Get new data for next page.
   * @param newPage Next page number.
   */
  export function goToPageByNum(newPage: number): void {
    const searchQuery = localStorage.getItem(SEARCH_QUERY);
    assertNonNullish(searchQuery);
    const params = new Params({
      offset: (LIMIT * (newPage - 1)),
      limit: LIMIT,
      ordering: (<Sorting>localStorage.getItem(SORT_LS)) ?? DEFAULT_ORDERING,
      search: searchQuery,
    });
    updateTable(params, newPage);
  }

  /** Get new data for first page. */
  export function goToFirstPage(): void {
    goToPageByNum(1);
  }

  /** Get new data for last page. */
  export function goToLastPage(): void {
    const count = localStorage.getItem(COUNT_LS);
    assertNonNullish(count);
    let page = Number.parseInt(count, DECIMAL) / LIMIT;
    if (isNaN(page) === true) {
      page = 1;
    } else {
      page = Math.ceil(page);
    }
    goToPageByNum(page);
  }
}
