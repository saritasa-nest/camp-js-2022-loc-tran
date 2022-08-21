import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

/** Check is user logged in or not. */
@Injectable({
  providedIn: 'root',
})
export class CheckIsNotLoggedInGuard implements CanLoad {

  public constructor(private readonly authService: AuthService) {}

  /**
   * @inheritdoc
   */
  public canLoad(): Observable<boolean> {
    return this.authService.isNotLoggedIn();
  }
}
