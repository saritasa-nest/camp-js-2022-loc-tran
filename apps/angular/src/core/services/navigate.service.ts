import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
   */
  public navigate(url: string): Promise<boolean> {
    return this.router.navigate([url]);
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
