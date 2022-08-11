import { Injectable } from '@angular/core';
import { Params, Router } from '@angular/router';

/** Handle navigate. */
@Injectable({
  providedIn: 'root',
})
export class NavigateService {

  public constructor(private readonly router: Router) {}

  /**
   * Navigate to new route.
   * @param url New route.
   * @param params Query parameter.
   */
  public navigate(url: string, params: Params = {}): Promise<boolean> {
    return this.router.navigate([url, params]);
  }
}
