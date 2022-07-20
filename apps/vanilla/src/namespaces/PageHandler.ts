import { Sorting } from '@js-camp/core/models/anime';
import { Params } from '@js-camp/core/models/params';
import { DEFAULT_SEARCH_QUERY } from '../script/init';

import { COUNT_LS, SEARCH_LS, SORT_QUERY } from '../script/localStorageName';

import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';
import { UrlSearch } from '../utils/urlSearchParams';

/** Value for page. */
export const FIRST_PAGE = 1;
export const LIMIT = 25;
export const OFFSET = 0;
export const DECIMAL = 10;

/** Default values of query if user don't pass any value. */
export const DEFAULT_ORDERING = Sorting.Default;

export namespace PageHandler {

  /**
   * Get new data for next page.
   * @param newPage Next page number.
   */
  export function goToPageByNum(newPage: number): void {
    const searchQuery = localStorage.getItem(SEARCH_LS) ?? DEFAULT_SEARCH_QUERY;
    assertNonNullish(searchQuery);
    const params = new Params({
      offset: (LIMIT * (newPage - 1)),
      limit: LIMIT,
      ordering: UrlSearch.getValue(SORT_QUERY) ?? DEFAULT_ORDERING,
      search: searchQuery
    });
    UrlSearch.setUrlSearch(new URLSearchParams({
      page: newPage.toString(),
      ordering: UrlSearch.getValue(SORT_QUERY) ?? DEFAULT_ORDERING,
    }));
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
