import { Query } from '@js-camp/core/models/query';

/** Generate Query object.
 * @param name Name of the query.
 * @param value Value of the query.
 * @param localStorageName Name to store value in local storage.
 * @param nullValue Value of the query while it get null.
 */
export function generateQuery(name: string, value: string | number, localStorageName: string, nullValue = ''): Query {
  return {
    name,
    value,
    localStorageName,
    nullValue,
  };
}
