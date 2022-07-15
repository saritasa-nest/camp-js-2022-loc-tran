import { ANIME_ROUTE, LIMIT, SORT_LS } from '../script/constants';
import { generateUrl } from '../script/generateUrl';
import { updateTable } from '../services/fetchAnime';

export namespace SortHandler {

  /** Change sorting type. */
  export function changeSorting(): void {
    let sortOption = document.querySelector<HTMLSelectElement>('.sort')?.value;
    const orderOption = document.querySelector<HTMLSelectElement>('.order')?.value;
    if (sortOption !== undefined && orderOption !== undefined) {
      sortOption = `${orderOption}${sortOption}`;
      localStorage.setItem(SORT_LS, sortOption);
      const params = new URLSearchParams({
        offset: '0',
        limit: LIMIT.toString(),
        ordering: sortOption,
      });
      updateTable(generateUrl(ANIME_ROUTE, params), 1);
    } else {
      throw new Error('Cannot get sort element and order element in DOM!');
    }
  }
}
