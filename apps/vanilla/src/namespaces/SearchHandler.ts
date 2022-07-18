import { Params } from '@js-camp/core/models/params';

import { OFFSET, FIRST_PAGE, LIMIT, SEARCH_LS, SORT_LS } from '../script/constants';
import { updateTable } from '../services/fetchAnime';
import { assertNonNullish } from '../utils/assertNonNullish';

export namespace SearchHandler {

  /** Handle searching functionality. */
  export function handleSearch(): void {
    const searchInput = document.querySelector<HTMLInputElement>('.search__input');
    assertNonNullish(searchInput);
    localStorage.setItem(SEARCH_LS, searchInput.value);
    const sortOption = localStorage.getItem(SORT_LS);
    assertNonNullish(sortOption);
    const params = new Params({
      offset: OFFSET,
      limit: LIMIT,
      ordering: sortOption,
      search: searchInput.value,
    });

    updateTable(params, FIRST_PAGE);
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
