import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpError } from '@js-camp/core/models/httpError';
import { Token } from '@js-camp/core/models/token';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  BehaviorSubject,
  catchError, Observable,
  of,
  Subject,
  switchMap,
  tap,
} from 'rxjs';

import { NavigateService } from '../../../../../src/core/services/navigate.service';
import { AuthService } from '../../../../core/services/auth.service';
import { TokenService } from '../../../../core/services/token.service';

export const HOME_ROUTE = '/';

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
  public readonly loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  /** Store error data response from back end. */
  protected readonly loginError$ = new BehaviorSubject<string>('');

  /** Subject that is used for unsubscribing from streams. */
  private readonly subscriptionManager$ = new Subject<void>();

  public constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
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
      .pipe(
        switchMap(token => this.tokenService.set(token)),
        tap(() => this.navigateService.navigate(HOME_ROUTE)),
        untilDestroyed(this),
        catchError((error: unknown) => this.handleLoginError(error)),
      )
      .subscribe();
  }

  /**
   * Handle login error.
   * @param error Error thrown.
   */
  public handleLoginError(error: unknown): Observable<Token | null> {
    if (error instanceof HttpError) {
      this.loginError$.next(error.detail);
    }
    return of(null);
  }
}
