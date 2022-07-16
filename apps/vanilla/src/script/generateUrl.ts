/**
 * Generate api address with query string.
 * @param params Object store data query.
 * @param url Request address.
 */
export function generateUrl(url: string, params: URLSearchParams): string {
  return `${url}?${params.toString()}`;
}
