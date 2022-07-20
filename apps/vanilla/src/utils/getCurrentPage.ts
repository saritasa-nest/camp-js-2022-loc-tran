import { FIRST_PAGE, DECIMAL } from '../namespaces/PageHandler';

/** Get current page from URL search params. */
export function getCurrentPage(): number {
  /** Default data for queries. */
  const urlParams = new URLSearchParams(window.location.search);
  const page = Number.parseInt(urlParams.get('page') ?? FIRST_PAGE.toString(), DECIMAL);
  return page;
}
