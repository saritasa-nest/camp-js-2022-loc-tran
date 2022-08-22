import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { HOME_ROUTE } from '../../app/features/auth/register/register.component';
import { AuthService } from '../services/auth.service';

/** Check is user logged in or not. */
@Injectable({
  providedIn: 'root',
})
export class CheckIsNotLoggedInGuard implements CanLoad {

  public constructor(private readonly authService: AuthService, private readonly router: Router) {}

  /**
   * @inheritdoc
   */
  public canLoad(): Observable<boolean> {
    return this.authService.isNotLoggedIn().pipe(
      tap(isNotLoggedIn => {
        if (!isNotLoggedIn) {
          this.router.navigate([HOME_ROUTE]);
        }
      }),
    );
  }
}
