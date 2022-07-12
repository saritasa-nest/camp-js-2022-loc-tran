import { Queries } from '@js-camp/core/models/query';

/**
 * Generate api address with query string.
 * @param queries Object store queries variable.
 * @param url Request address.
 */
export function generateUrl(url: string, queries: Queries): string {
  let queryString = `${url}?`;
  queries.queryList.forEach(query => {
    let { value } = query;
    if (value === query.nullValue) {
      value = localStorage.getItem(query.localStorageName) ?? query.nullValue;
    }
    queryString += `${query.name}=${query.value}&`;
  });
  return queryString;
}
