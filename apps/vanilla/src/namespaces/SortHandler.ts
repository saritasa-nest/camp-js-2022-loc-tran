import { PaginationParams } from '@js-camp/core/models/paginationParams';

import { DEFAULT_SEARCH_QUERY } from '../script/init';

import { PAGE_QUERY, LOCAL_STORAGE_SEARCH } from '../script/localStorageName';
import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';
import { UrlSearch } from '../utils/urlSearchParams';

import { DECIMAL, FIRST_PAGE, LIMIT } from './PageHandler';

export namespace SortHandler {

  /** Change sorting type. */
  export function changeSorting(): void {
    const sortOption = document.querySelector<HTMLSelectElement>('.sort')?.value;
    const orderOption = document.querySelector<HTMLSelectElement>('.order')?.value;
    const searchQuery = localStorage.getItem(LOCAL_STORAGE_SEARCH) ?? DEFAULT_SEARCH_QUERY;
    assertNonNullish(sortOption);
    const page = Number.parseInt(UrlSearch.getValue(PAGE_QUERY) ?? FIRST_PAGE.toString(), DECIMAL);
    assertNonNullish(orderOption);
    assertNonNullish(searchQuery);
    const newSortOption = `${orderOption}${sortOption}`;
    const params = new PaginationParams({
      offset: (LIMIT * (page - 1)),
      limit: LIMIT,
      ordering: newSortOption,
      search: searchQuery,
    });
    UrlSearch.setUrlSearch(new URLSearchParams({
      page: page.toString(),
      ordering: newSortOption,
    }));
    updateTable(params, page);
  }
}
