import { Queries } from '@js-camp/core/models/query';

import { SORT_LS, DEFAULT_SORTING, ORDER_LS, DEFAULT_ORDERING, OFFSET_HEADER, DEFAULT_OFFSET, OFFSET_LS, LIMIT_HEADER, LIMIT, LIMIT_LS, SORT_HEADER, ANIME_ROUTE } from '../script/constants';
import { generateUrl } from '../script/generateUrl';
import { generateQuery } from '../script/helpers';
import { updateAnime } from '../services/fetchAnime';

export namespace SortHandler {

  /** Change sorting type. */
  export function changeSorting(): void {
    let sortOption = document.querySelector<HTMLSelectElement>('.sort')?.value;
    const orderOption = document.querySelector<HTMLSelectElement>('.order')?.value;
    if (sortOption !== null && orderOption !== null) {
      sortOption = `${orderOption}${sortOption}`;
      localStorage.setItem(SORT_LS, sortOption ?? DEFAULT_SORTING);
      localStorage.setItem(ORDER_LS, orderOption ?? DEFAULT_ORDERING);

      const queries: Queries = {
        queryList: [
          generateQuery(OFFSET_HEADER, DEFAULT_OFFSET, OFFSET_LS, DEFAULT_OFFSET),
          generateQuery(LIMIT_HEADER, LIMIT, LIMIT_LS),
          generateQuery(SORT_HEADER, sortOption ?? DEFAULT_ORDERING, SORT_LS, DEFAULT_ORDERING),
        ],
      };
      updateAnime(generateUrl(ANIME_ROUTE, queries));
    } else {
      throw new Error('Cannot get sort element and order element in DOM!');
    }
  }
}
