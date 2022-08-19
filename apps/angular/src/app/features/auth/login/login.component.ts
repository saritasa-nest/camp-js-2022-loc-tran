import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormError } from '@js-camp/core/models/httpError';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';

import { NavigateService } from '../../../../../src/core/services/navigate.service';
import { AuthService } from '../../../../core/services/auth.service';

/** Login component. */
@UntilDestroy()
@Component({
  selector: 'camp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  /** Form group to manage login information. */
  protected readonly loginForm = this.formBuilder.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });

  /** Store error data. */
  protected readonly loginError$ = new BehaviorSubject<string>('');

  public constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly navigateService: NavigateService,
  ) {}

  /** Handle submit for login form. */
  public onSubmit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }
    this.authService
      .login({
        email: this.loginForm.value.email ?? '',
        password: this.loginForm.value.password ?? '',
      })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: () => this.navigateService.navigateToHome(),
        error: (error: unknown) => this.handleLoginError(error),
      });
  }

  /**
   * Handle login error.
   * @param error Error thrown.
   */
  public handleLoginError(error: unknown): void {
    if (error instanceof FormError) {
      this.loginError$.next(error.detail);
    }
  }
}
