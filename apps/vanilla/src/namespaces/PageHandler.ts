import { Queries } from '@js-camp/core/models/query';

import { ANIME_ROUTE, COUNT_LS, DECIMAL, DEFAULT_OFFSET, DEFAULT_PAGE, DEFAULT_QUERIES, DEFAULT_SORTING, LIMIT, LIMIT_HEADER, LIMIT_LS, OFFSET_HEADER, OFFSET_LS, PAGE_LS, SORT_HEADER, SORT_LS } from '../script/constants';
import { generateUrl } from '../script/generateUrl';
import { generateQuery } from '../script/helpers';
import { updateAnime } from '../services/fetchAnime';

export namespace PageHandler {

  /**
   * Get new data for next page.
   * @param newPage Next page number.
   */
  export function goToPageByNum(newPage: number): void {
    localStorage.setItem(PAGE_LS, newPage.toString());
    localStorage.setItem(OFFSET_LS, (LIMIT * (newPage - 1)).toString());

    const queries: Queries = {
      queryList: [
        generateQuery(OFFSET_HEADER, LIMIT * (newPage - 1), OFFSET_LS),
        generateQuery(LIMIT_HEADER, LIMIT, LIMIT_LS),
        generateQuery(SORT_HEADER, DEFAULT_SORTING, SORT_LS, DEFAULT_SORTING),
      ],
    };
    updateAnime(generateUrl(ANIME_ROUTE, queries));
  }

  /** Get new data for first page. */
  export function goToFirstPage(): void {
    localStorage.setItem(PAGE_LS, DEFAULT_PAGE.toString());
    localStorage.setItem(OFFSET_LS, DEFAULT_OFFSET.toString());
    updateAnime(generateUrl(ANIME_ROUTE, DEFAULT_QUERIES));
  }

  /** Get new data for last page. */
  export function goToLastPage(): void {
    const count = localStorage.getItem(COUNT_LS);
    if (count != null) {
      const page = Math.ceil(Number.parseInt(count, DECIMAL) / LIMIT);
      localStorage.setItem(PAGE_LS, page.toString());
      const offset = (page - 1) * LIMIT;
      localStorage.setItem(OFFSET_LS, offset.toString());
      const queries: Queries = {
        queryList: [
          generateQuery(OFFSET_HEADER, offset, OFFSET_LS),
          generateQuery(LIMIT_HEADER, LIMIT, LIMIT_LS),
          generateQuery(SORT_HEADER, DEFAULT_SORTING, SORT_LS, DEFAULT_SORTING),
        ],
      };
      updateAnime(generateUrl(ANIME_ROUTE, queries));
    } else {
      throw new Error('Cannot find COUNT variable in local storage!');
    }
  }
}
