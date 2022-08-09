import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

/** Check is user logged in or not. */
@Injectable()
export class CheckIsNotLoggedInGuard implements CanActivate {

  public constructor(private readonly authService: AuthService) {}

  /**
   * A.
   * @param next A.
   * @param state A.
   */
  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isNotLoggedIn();
  }
}
