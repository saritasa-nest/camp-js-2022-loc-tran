import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { NavigateService } from '../services/navigate.service';

const HOME_ROUTE = '/';

/** Check is user logged in or not. */
@Injectable()
export class CheckIsNotLoggedInGuard implements CanActivate {

  public constructor(private readonly authService: AuthService, private navigateService: NavigateService) {}

  /**
   * @inheritdoc
   */
  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isNotLoggedIn().pipe(tap(isNotLoggedIn => {
      if (!isNotLoggedIn) {
        this.navigateService.navigate(HOME_ROUTE);
      }
    }));
  }
}
