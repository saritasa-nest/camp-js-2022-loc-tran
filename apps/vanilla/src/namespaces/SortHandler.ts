import { ANIME_ROUTE, DEFAULT_OFFSET, FIRST_PAGE, LIMIT, SEARCH_QUERY, SORT_LS } from '../script/constants';
import { generateUrl } from '../script/generateUrl';
import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';

export namespace SortHandler {

  /** Change sorting type. */
  export function changeSorting(): void {
    let sortOption = document.querySelector<HTMLSelectElement>('.sort')?.value;
    const orderOption = document.querySelector<HTMLSelectElement>('.order')?.value;
    const searchQuery = localStorage.getItem(SEARCH_QUERY);
    assertNonNullish(sortOption);
    assertNonNullish(orderOption);
    assertNonNullish(searchQuery);
    sortOption = `${orderOption}${sortOption}`;
    localStorage.setItem(SORT_LS, sortOption);
    const params = new URLSearchParams({
      offset: DEFAULT_OFFSET,
      limit: LIMIT.toString(),
      ordering: sortOption,
      search: searchQuery,
    });

    updateTable(generateUrl(ANIME_ROUTE, params), FIRST_PAGE);
  }
}
