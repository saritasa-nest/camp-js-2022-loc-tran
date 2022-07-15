import { ANIME_ROUTE, COUNT_LS, DECIMAL, LIMIT, SORT_LS } from '../script/constants';
import { generateUrl } from '../script/generateUrl';
import { updateTable } from '../services/fetchAnime';

export namespace PageHandler {

  /**
   * Get new data for next page.
   * @param newPage Next page number.
   */
  export function goToPageByNum(newPage: number): void {
    const params = new URLSearchParams({
      offset: (LIMIT * (newPage - 1)).toString(),
      limit: LIMIT.toString(),
    });

    const sortOption = localStorage.getItem(SORT_LS);
    if (sortOption !== null) {
      params.append('ordering', sortOption);
    }
    updateTable(generateUrl(ANIME_ROUTE, params), newPage);
  }

  /** Get new data for first page. */
  export function goToFirstPage(): void {
    const params = new URLSearchParams({
      offset: '0',
      limit: LIMIT.toString(),
    });
    const sortOption = localStorage.getItem(SORT_LS);
    if (sortOption !== null) {
      params.append('ordering', sortOption);
    }
    updateTable(generateUrl(ANIME_ROUTE, params), 1);
  }

  /** Get new data for last page. */
  export function goToLastPage(): void {
    const count = localStorage.getItem(COUNT_LS);
    if (count !== null) {
      let page = Number.parseInt(count, DECIMAL) / LIMIT;
      if (isNaN(page) === true) {
        page = 1;
      } else {
        page = Math.ceil(page);
      }
      const offset = (page - 1) * LIMIT;
      const params = new URLSearchParams({
        offset: offset.toString(),
        limit: LIMIT.toString(),
      });
      const sortOption = localStorage.getItem(SORT_LS);
      if (sortOption !== null) {
        params.append('ordering', sortOption);
      }
      updateTable(generateUrl(ANIME_ROUTE, params), page);
    } else {
      throw new Error('Cannot read total of anime');
    }
  }
}
