import { Queries } from '@js-camp/core/models/query';

import { ANIME_ROUTE, DEFAULT_FILTERING, DEFAULT_OFFSET, DEFAULT_ORDERING, FILTER_HEADER, FILTER_LS, LIMIT, LIMIT_HEADER, LIMIT_LS, OFFSET_HEADER, OFFSET_LS, SORT_HEADER, SORT_LS } from '../script/constants';
import { generateUrl } from '../script/generateUrl';
import { generateQuery } from '../script/helpers';
import { updateAnime } from '../services/fetchAnime';

import { PageHandler } from './PageHandler';

export namespace FilterHandler {

  /** Change filtering type. */
  export function changeFiltering(): void {
    const filterOption = document.querySelector<HTMLSelectElement>('.filter')?.value;
    if (filterOption !== null) {
      localStorage.setItem(FILTER_LS, filterOption ?? DEFAULT_FILTERING);

      const queries: Queries = {
        queryList: [
          generateQuery(OFFSET_HEADER, DEFAULT_OFFSET, OFFSET_LS, DEFAULT_OFFSET),
          generateQuery(LIMIT_HEADER, LIMIT, LIMIT_LS),
          generateQuery(SORT_HEADER, DEFAULT_ORDERING, SORT_LS, DEFAULT_ORDERING),
          generateQuery(FILTER_HEADER, filterOption ?? DEFAULT_FILTERING, FILTER_LS, DEFAULT_FILTERING),
        ],
      };
      updateAnime(generateUrl(ANIME_ROUTE, queries));
      PageHandler.goToFirstPage();
    } else {
      throw new Error('Cannot get sort element and order element in DOM!');
    }
  }
}
