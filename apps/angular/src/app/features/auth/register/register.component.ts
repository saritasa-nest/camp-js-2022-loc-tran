import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '@js-camp/core/models/account';
import { DataError, HttpError } from '@js-camp/core/models/httpError';
import { Token } from '@js-camp/core/models/token';

import {
  BehaviorSubject,
  catchError,
  merge,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';

import { TokenService } from '../../../../core/services/token.service';

import { AuthService } from '../../../../core/services/auth.service';

/** Register component. */
@Component({
  selector: 'camp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit, OnDestroy {
  /** Store error data response from BE. */
  public readonly errorList$ = new BehaviorSubject<DataError>({});

  /** Emit account data from register form. */
  public readonly account$ = new Subject<Account>();

  /** Sign up new account. If sign up failed then emit null else emit token received. */
  public readonly register$: Observable<Token | null>;

  /** Subject that is used for unsubscribing from streams. */
  private readonly subscriptionManager$ = new Subject<void>();

  /** Form group to manage register information. */
  public readonly registerForm = this.formBuilder.group(
    {
      email: ['', Validators.required],
      firstName: [''],
      lastName: [''],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators: this.checkPasswords,
    },
  );

  public constructor(
    private readonly formBuilder: FormBuilder,
    private readonly tokenService: TokenService,
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
    this.register$ = this.account$.pipe(
      switchMap(registerData =>
        authService.register(registerData).pipe(
          switchMap(token => this.tokenService.set(token)),
          catchError(this.handleRegisterError.bind(this)),
        )),
    );
  }

  /** Initialize data. */
  public ngOnInit(): void {
    const registerSideEffect$ = this.register$.pipe(
      tap(registerResult => {
        if (registerResult === null) {
          this.registerForm.markAllAsTouched();
          return;
        }
        this.router.navigate(['/']);
      }),
    );

    merge(registerSideEffect$)
      .pipe(takeUntil(this.subscriptionManager$))
      .subscribe();
  }

  /** Clean side effect streams. */
  public ngOnDestroy(): void {
    this.subscriptionManager$.next();
    this.subscriptionManager$.complete();
  }

  /** Handle submit register form. */
  public onSubmit(): void {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.invalid) {
      return;
    }
    this.account$.next(
      new Account({
        email: this.registerForm.value.email ?? '',
        firstName: this.registerForm.value.firstName ?? '',
        lastName: this.registerForm.value.lastName ?? '',
        password: this.registerForm.value.password ?? '',
      }),
    );
  }

  /**
   * Compare password and retyped password.
   * @param control Form control confirm password.
   */
  public checkPasswords(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ notSame: true });
      return { notSame: true };
    }
    return null;
  }

  /**
   * Handle register error.
   * @param error Error thrown.
   */
  public handleRegisterError(error: unknown): Observable<Token | null> {
    if (error instanceof HttpError) {
      this.errorList$.next(error.data);
      for (const key of Object.keys(error.data)) {
        this.registerForm.get(key)?.setErrors({ invalidData: true });
      }
    }
    return of(null);
  }
}
