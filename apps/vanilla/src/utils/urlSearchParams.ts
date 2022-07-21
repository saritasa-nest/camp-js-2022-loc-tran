export namespace UrlSearch {

  /**
   * Set query params to search url.
   * @param params Params of query.
   */
  export function setUrlSearch(params: URLSearchParams): void {
    window.history.pushState({}, '', `?${params.toString()}`);
  }

  /**
   * Get value from url search.
   * @param key Key of query.
   */
  export function getValue(key: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
  }
}
