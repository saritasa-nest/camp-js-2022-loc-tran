import { ANIME_ROUTE, DEFAULT_OFFSET, FIRST_PAGE, LIMIT, SORT_LS } from '../script/constants';
import { generateUrl } from '../script/generateUrl';
import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';

export namespace SortHandler {

  /** Change sorting type. */
  export function changeSorting(): void {
    const sortOption = document.querySelector<HTMLSelectElement>('.sort')?.value;
    const orderOption = document.querySelector<HTMLSelectElement>('.order')?.value;
    assertNonNullish(sortOption);
    assertNonNullish(orderOption);
    const newSortOption = `${orderOption}${sortOption}`;
    localStorage.setItem(SORT_LS, newSortOption);
    const params = new URLSearchParams({
      offset: DEFAULT_OFFSET,
      limit: LIMIT.toString(),
      ordering: newSortOption,
    });
    updateTable(generateUrl(ANIME_ROUTE, params), FIRST_PAGE);
  }
}
