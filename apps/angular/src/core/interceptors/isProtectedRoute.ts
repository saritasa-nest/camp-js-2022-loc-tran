import { environment } from '../../environments/environment';

/**
 * Check if a url is prohibited or not.
 * @param url Url request.
 * @param prohibitedUrl Prohibited Url.
 */
export function isProtectedRoute(url: URL, prohibitedUrl: string): boolean {
  return url.href.includes(environment.apiUrl + prohibitedUrl);
}
