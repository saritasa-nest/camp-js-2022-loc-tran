import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

import { AuthService } from '../../../core/services/auth.service';

/** Reused header. */
@UntilDestroy()
@Component({
  selector: 'camp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  /** Check if user is logged in or not. */
  public readonly isLoggedIn$: Observable<boolean>;

  public constructor(private readonly authService: AuthService) {
    this.isLoggedIn$ = authService.isLoggedIn();
  }

  /**
   * Log the user out.
   * @param event Event of logout.
   */
  public handleLogout(event: Event): void {
    event.preventDefault();
    this.authService.logout().pipe(untilDestroyed(this))
      .subscribe();
  }
}
