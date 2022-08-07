import { ChangeDetectionStrategy, Component } from '@angular/core';
import { from, Observable } from 'rxjs';

import { AuthService } from '../../../core/services/auth.service';

/** Reused header. */
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
    this.isLoggedIn$ = from(authService.isLoggedIn());
  }

  /**
   * Log the user out.
   * @param event Event of logout.
   */
  public async handleLogout(event: Event): Promise<void> {
    event.preventDefault();
    await this.authService.logout();
  }
}
