import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { DataError, HttpError } from '@js-camp/core/models/httpError';
import { Token } from '@js-camp/core/models/token';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  BehaviorSubject,
  catchError, Observable,
  of,
  Subject,
  switchMap, tap,
} from 'rxjs';

import { AuthService } from '../../../../core/services/auth.service';
import { TokenService } from '../../../../core/services/token.service';
import { HOME_ROUTE } from '../login/login.component';
import { NavigateService } from '../../../../../src/core/services/navigate.service';

/** Register component. */
@UntilDestroy()
@Component({
  selector: 'camp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  /** Store error data response from BE. */
  protected readonly errorList$ = new BehaviorSubject<DataError>({});

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
    },
    {
      validators: this.checkPasswords,
    },
  );

  public constructor(
    private readonly formBuilder: FormBuilder,
    private readonly tokenService: TokenService,
    private readonly authService: AuthService,
    private readonly navigateService: NavigateService,
  ) {}

  /** Handle submit register form. */
  public onSubmit(): void {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.invalid) {
      return;
    }
    this.authService
      .register({
        email: this.registerForm.value.email ?? '',
        firstName: this.registerForm.value.firstName ?? '',
        lastName: this.registerForm.value.lastName ?? '',
        password: this.registerForm.value.password ?? '',
      })
      .pipe(
        switchMap(token => this.tokenService.set(token)),
        tap(() => this.navigateService.navigate(HOME_ROUTE)),
        untilDestroyed(this),
        catchError((error: unknown) => this.handleRegisterError(error)),
      )
      .subscribe();
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
