import { ANIME_ROUTE, DEFAULT_OFFSET, FIRST_PAGE, LIMIT, SEARCH_QUERY, SORT_LS } from '../script/constants';
import { generateUrl } from '../script/generateUrl';
import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';

export namespace SearchHandler {

  /** Handle searching functionality. */
  export function handleSearch(): void {
    const searchText = document.querySelector<HTMLInputElement>('.search__input');
    assertNonNullish(searchText);
    localStorage.setItem(SEARCH_QUERY, searchText.value);
    const sortOption = localStorage.getItem(SORT_LS);
    assertNonNullish(sortOption);
    const params = new URLSearchParams({
      offset: DEFAULT_OFFSET,
      limit: LIMIT.toString(),
      ordering: sortOption,
      search: searchText.value,
    });

    updateTable(generateUrl(ANIME_ROUTE, params), FIRST_PAGE);
  }

  /**
   * Handle searching by press enter key.
   * @param event Keyboard press event.
   */
  export function searchByEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
}
