import { Params } from '@js-camp/core/models/params';

import { SORT_LS } from '../script/constants/localStorageName';
import { assertNonNullish } from '../utils/assertNonNullish';
import { updateTable } from '../services/fetchAnime';

import { OFFSET, LIMIT, FIRST_PAGE } from './PageHandler';

export namespace SortHandler {

  /** Change sorting type. */
  export function changeSorting(): void {
    const sortOption = document.querySelector<HTMLSelectElement>('.sort')?.value;
    const orderOption = document.querySelector<HTMLSelectElement>('.order')?.value;
    assertNonNullish(sortOption);
    assertNonNullish(orderOption);
    const newSortOption = `${orderOption}${sortOption}`;
    localStorage.setItem(SORT_LS, newSortOption);
    const params = new Params({
      offset: OFFSET,
      limit: LIMIT,
      ordering: newSortOption,
    });
    updateTable(params, FIRST_PAGE);
  }
}
