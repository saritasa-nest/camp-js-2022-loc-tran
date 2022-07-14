import { Queries } from '@js-camp/core/models/query';

import { findInLocalStorage } from '../services/localStorage';

/**
 * Generate api address with query string.
 * @param queries Object store queries variable.
 * @param url Request address.
 */
export function generateUrl(url: string, queries: Queries): string {
  let queryString = `${url}?`;
  const searchParams = new URLSearchParams();
  queries.queryList.forEach(query => {
    let { value } = query;
    if (value === query.defaultValue) {
      value = findInLocalStorage(value, query.localStorageName);
    }
    searchParams.append(query.name, value.toString());
  });
  queryString += searchParams.toString();
  return queryString;
}
