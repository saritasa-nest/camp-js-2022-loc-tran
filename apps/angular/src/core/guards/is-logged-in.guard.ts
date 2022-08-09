import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

/** Check is user logged in or not. */
@Injectable()
export class CheckIsLoggedInGuard implements CanActivate {

  public constructor(private readonly authService: AuthService, private readonly router: Router) {}

  /**
   * A.
   * @param next A.
   * @param state A.
   */
  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn();
  }
}
