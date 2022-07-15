import { SORT_LS, DEFAULT_OFFSET, LIMIT, ANIME_ROUTE, FILTER_LS, FIRST_PAGE } from '../script/constants';
import { generateUrl } from '../script/generateUrl';
import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';

export namespace FilterHandler {

  /** Change sorting type. */
  export function changeFiltering(): void {
    const filterOption = document.querySelector<HTMLSelectElement>('.filter')?.value;
    assertNonNullish(filterOption);
    localStorage.setItem(FILTER_LS, filterOption);
    const params = new URLSearchParams({
      offset: DEFAULT_OFFSET,
      limit: LIMIT.toString(),
      type: filterOption,
    });
    const sortOption = localStorage.getItem(SORT_LS);
    assertNonNullish(sortOption);
    params.append('ordering', sortOption);
    updateTable(generateUrl(ANIME_ROUTE, params), FIRST_PAGE);
  }
}
