import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder, ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DataError, FormError } from '@js-camp/core/models/httpError';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';

import { AuthService } from '../../../../core/services/auth.service';

export const HOME_ROUTE = '/anime/';

/** Register component. */
@UntilDestroy()
@Component({
  selector: 'camp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  /** Store error data. */
  protected readonly errorList$ = new BehaviorSubject<DataError>({});

  /** Form group to manage register information. */
  protected readonly registerForm = this.formBuilder.nonNullable.group(
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
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  /** Handle submit register form. */
  public onSubmit(): void {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.invalid) {
      return;
    }
    this.authService
      .register({
        email: this.registerForm.getRawValue().email,
        firstName: this.registerForm.getRawValue().firstName,
        lastName: this.registerForm.getRawValue().lastName,
        password: this.registerForm.getRawValue().password,
      })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: () => this.router.navigate([HOME_ROUTE]),
        error: (error: unknown) => this.handleRegisterError(error),
      });
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
  public handleRegisterError(error: unknown): void {
    if (error instanceof FormError) {
      this.errorList$.next(error.data);
      for (const key of Object.keys(error.data)) {
        this.registerForm.get(key)?.setErrors({ invalidData: error.data[key].join(',') });
      }
    }
  }
}
