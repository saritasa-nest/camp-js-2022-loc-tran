import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

const LOGIN_ROUTE = '/login/';

/** Check is user logged in or not. */
@Injectable({
  providedIn: 'root',
})
export class CheckIsLoggedInGuard implements CanActivate {
  public constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  /**
   * @inheritdoc
   */
  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn().pipe(
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate([LOGIN_ROUTE]);
        }
      }),
    );
  }
}
