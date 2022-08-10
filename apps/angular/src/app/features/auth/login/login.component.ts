import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpError } from '@js-camp/core/models/httpError';
import { LoginData } from '@js-camp/core/models/loginData';
import { Token } from '@js-camp/core/models/token';
import { BehaviorSubject, catchError, merge, Observable, of, Subject, switchMap, takeUntil, tap } from 'rxjs';

import { TokenService } from '../../../../core/services/token.service';
import { AuthService } from '../../../../core/services/auth.service';

/** Login component. */
@Component({
  selector: 'camp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
  /** Form group to manage login information. */
  public readonly loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  /** Store error data response from BE. */
  public readonly loginError$ = new BehaviorSubject<string>('');

  /** Emit login data from login form. */
  public readonly loginData$ = new Subject<LoginData>();

  /** Sign up new account. If sign up failed then emit null else emit token received. */
  public readonly login$: Observable<Token | null>;

  /** Subject that is used for unsubscribing from streams. */
  private readonly subscriptionManager$ = new Subject<void>();

  public constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
    private readonly router: Router,
  ) {
    this.login$ = this.loginData$.pipe(
      switchMap(loginData =>
        authService.login(loginData).pipe(
          switchMap(token => this.tokenService.set(token)),
          catchError(this.handleLoginError.bind(this)),
        )),
    );
  }

  /** Initialize data. */
  public ngOnInit(): void {
    const loginSideEffect$ = this.login$.pipe(
      tap(loginResult => {
        if (loginResult === null) {
          this.loginForm.markAllAsTouched();
          return;
        }
        this.router.navigate(['/']);
      }),
    );

    merge(loginSideEffect$)
      .pipe(takeUntil(this.subscriptionManager$))
      .subscribe();
  }

  /** Clean side effect streams. */
  public ngOnDestroy(): void {
    this.subscriptionManager$.next();
    this.subscriptionManager$.complete();
  }

  /** Handle submit for login form. */
  public onSubmit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }
    this.loginData$.next({
      email: this.loginForm.value.email ?? '',
      password: this.loginForm.value.password ?? '',
    });
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
