import { ANIME_ROUTE, COUNT_LS, DECIMAL, DEFAULT_ORDERING, LIMIT, SORT_LS } from '../script/constants';
import { generateUrl } from '../script/generateUrl';
import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';

export namespace PageHandler {

  /**
   * Get new data for next page.
   * @param newPage Next page number.
   */
  export function goToPageByNum(newPage: number): void {
    const params = new URLSearchParams({
      offset: (LIMIT * (newPage - 1)).toString(),
      limit: LIMIT.toString(),
      ordering: localStorage.getItem(SORT_LS) ?? DEFAULT_ORDERING,
    });
    updateTable(generateUrl(ANIME_ROUTE, params), newPage);
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
