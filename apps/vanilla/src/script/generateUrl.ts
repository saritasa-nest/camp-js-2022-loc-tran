/**
 * Generate api address with query string.
 * @param params Object store data query.
 * @param url Request address.
 */
export function generateUrl(url: string, params: URLSearchParams): string {
  let queryString = `${url}?`;
  queryString += params.toString();
  return queryString;
}
