import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { NavigateService } from '../services/navigate.service';

const LOGIN_ROUTE = '/login/';

/** Check is user logged in or not. */
@Injectable({
  providedIn: 'root',
})
export class CheckIsLoggedInGuard implements CanActivate {
  public constructor(
    private readonly authService: AuthService,
    private readonly navigateService: NavigateService,
  ) {}

  /**
   * @inheritdoc
   */
<<<<<<< HEAD
  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn().pipe(
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.navigateService.navigate(LOGIN_ROUTE);
        }
      }),
    );
=======
  public canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn();
>>>>>>> feature/JC19-432-authorization-angular
  }
}
