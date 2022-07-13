import { Queries } from '@js-camp/core/models/query';

import { findInLocalStorage } from '../services/localStorage';

/**
 * Generate api address with query string.
 * @param queries Object store queries variable.
 * @param url Request address.
 */
export function generateUrl(url: string, queries: Queries): string {
  let queryString = `${url}?`;
  queries.queryList.forEach(query => {
    let { value } = query;
    if (value === query.defaultValue) {
      value = findInLocalStorage(value, query.localStorageName);
    }
    queryString += `${query.name}=${value}&`;
  });
  return queryString;
}
