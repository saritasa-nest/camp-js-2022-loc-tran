import { SEARCH_LS, SORT_LS } from '../script/constants';

/** Check for null or undefined element.*/
export function resetStorage(): void {
  localStorage.setItem(SORT_LS, '');
  localStorage.setItem(SEARCH_LS, '');
}
