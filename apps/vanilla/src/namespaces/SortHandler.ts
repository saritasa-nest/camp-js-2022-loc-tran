import { Params } from '@js-camp/core/models/params';

import { FIRST_PAGE, LIMIT, OFFSET, SORT_LS, SEARCH_LS } from '../script/constants';

import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';

export namespace SortHandler {

  /** Change sorting type. */
  export function changeSorting(): void {
    const sortOption = document.querySelector<HTMLSelectElement>('.sort')?.value;
    const orderOption = document.querySelector<HTMLSelectElement>('.order')?.value;
    const searchQuery = localStorage.getItem(SEARCH_LS);
    assertNonNullish(sortOption);
    assertNonNullish(orderOption);
    assertNonNullish(searchQuery);
    const newSortOption = `${orderOption}${sortOption}`;
    localStorage.setItem(SORT_LS, newSortOption);
    const params = new Params({
      offset: OFFSET,
      limit: LIMIT,
      ordering: newSortOption,
      search: searchQuery,
    });
    updateTable(params, FIRST_PAGE);
  }
}
