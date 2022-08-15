import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

const HOME_ROUTE = '/';

/** Handle navigate. */
@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  public constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {}

  /**
   * Navigate to new route.
   * @param url New route.
   * @param params Query params.
   */
  public navigate(url: string, params: Params = {}): Promise<boolean> {
    return this.router.navigate([url], { queryParams: { ...params } });
  }

  /** Navigate user to home. */
  public navigateToHome(): Promise<boolean> {
    return this.router.navigate([HOME_ROUTE]);
  }

  /** Reload page by navigate to current page. */
  public reloadPage(): Promise<boolean> {
    return this.router.navigate([HOME_ROUTE], {
      queryParams: {
        ...this.route.snapshot.queryParams,
        time: Number(new Date()),
      },
    });
  }
}
