import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormError } from '@js-camp/core/models/httpError';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';

import { AuthService } from '../../../../core/services/auth.service';
import { HOME_ROUTE } from '../register/register.component';

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
  protected readonly loginForm = this.formBuilder.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  /** Store error data. */
  protected readonly loginError$ = new BehaviorSubject<string>('');

  public constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  /** Handle submit for login form. */
  public onSubmit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }
    this.authService
      .login({
        email: this.loginForm.getRawValue().email,
        password: this.loginForm.getRawValue().password,
      })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: () => this.router.navigate([HOME_ROUTE]),
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
