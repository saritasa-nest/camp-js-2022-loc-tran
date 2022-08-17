import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { DataError, HttpError } from '@js-camp/core/models/httpError';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';

import { NavigateService } from '../../../../../src/core/services/navigate.service';
import { AuthService } from '../../../../core/services/auth.service';

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
      .pipe(untilDestroyed(this))
      .subscribe({
        next: () => this.navigateService.navigateToHome(),
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
    if (error instanceof HttpError) {
      this.errorList$.next(error.data);
      for (const key of Object.keys(error.data)) {
        this.registerForm.get(key)?.setErrors({ invalidData: true });
      }
    }
  }
}
