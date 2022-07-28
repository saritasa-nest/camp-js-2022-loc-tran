import { PaginationParams } from '@js-camp/core/models/paginationParams';

import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';

import { SEARCH_LS, SORT_QUERY } from '../script/localStorageName';

import { UrlSearch } from '../utils/urlSearchParams';

import { DEFAULT_ORDERING, FIRST_PAGE, LIMIT } from './PageHandler';

export namespace SearchHandler {

  /** Handle searching functionality. */
  export function handleSearch(): void {
    const searchInput = document.querySelector<HTMLInputElement>('.search__input');
    assertNonNullish(searchInput);
    localStorage.setItem(SEARCH_LS, searchInput.value);
    const params = new PaginationParams({
      offset: (LIMIT * (FIRST_PAGE - 1)),
      limit: LIMIT,
      ordering: UrlSearch.getValue(SORT_QUERY) ?? DEFAULT_ORDERING,
      search: searchInput.value,
    });
    UrlSearch.setUrlSearch(new URLSearchParams({
      page: FIRST_PAGE.toString(),
      ordering: UrlSearch.getValue(SORT_QUERY) ?? DEFAULT_ORDERING,
    }));
    updateTable(params, FIRST_PAGE);
  }
}
