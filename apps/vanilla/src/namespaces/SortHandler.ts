import { PaginationParams } from '@js-camp/core/models/paginationParams';

import { PAGE_QUERY } from '../script/localStorageName';
import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';
import { UrlSearch } from '../utils/urlSearchParams';

import { DECIMAL, FIRST_PAGE, LIMIT } from './PageHandler';

export namespace SortHandler {

  /** Change sorting type. */
  export function changeSorting(): void {
    const sortOption = document.querySelector<HTMLSelectElement>('.sort')?.value;
    const orderOption = document.querySelector<HTMLSelectElement>('.order')?.value;
    assertNonNullish(sortOption);
    const page = Number.parseInt(UrlSearch.getValue(PAGE_QUERY) ?? FIRST_PAGE.toString(), DECIMAL);
    assertNonNullish(orderOption);
    const newSortOption = `${orderOption}${sortOption}`;
    const params = new PaginationParams({
      offset: (LIMIT * (page - 1)),
      limit: LIMIT,
      ordering: newSortOption,
    });
    UrlSearch.setUrlSearch(new URLSearchParams({
      page: page.toString(),
      ordering: newSortOption,
    }));
    updateTable(params, page);
  }
}
