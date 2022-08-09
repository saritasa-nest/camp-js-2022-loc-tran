import { environment } from '../../environments/environment';

/**
 * Check if a url is prohibited or not.
 * @param url Url request.
 * @param prohibitedUrl Prohibited Url.
 */
export function isProhibitedRoute(url: string, prohibitedUrl: string): boolean {
  return url.includes(environment.apiUrl + prohibitedUrl);
}
