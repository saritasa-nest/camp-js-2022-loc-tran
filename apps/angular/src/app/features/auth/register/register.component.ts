import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Account } from '@js-camp/core/models/account';
import { DataError, HttpError } from '@js-camp/core/models/httpError';
import { Token } from '@js-camp/core/models/token';
import {
  BehaviorSubject,
  catchError,
  Observable,
  of,
  switchMap,
  Subject,
} from 'rxjs';

import { AuthService } from '../../../../core/services/auth.service';

/** Register component. */
@Component({
  selector: 'camp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  /** */
  public errorList$ = new BehaviorSubject<DataError>({});

  /** */
  public register$ = new Subject<Account>();

  /** */
  public readonly token$: Observable<Token>;

  /** Form group to manage register information. */
  public readonly registerForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    firstName: [''],
    lastName: [''],
    retypePassword: ['', Validators.required],
  });

  public constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
  ) {
    this.token$ = this.register$.pipe(
      switchMap(registerData =>
        authService.register(registerData).pipe(
          catchError((error: unknown) => {
            if (error instanceof HttpError) {
              this.errorList$.next(error.data);
              for (const key of Object.keys(error.data)) {
                if (this.registerForm.contains(key)) {
                  this.registerForm.get(key)?.setErrors({ invalidData: true });
                }
              }
            }
            return of(new Token({ accessToken: '', refreshToken: '' }));
          }),
        )),
    );
  }

  /**  */
  public ngOnInit(): void {
    this.token$.subscribe(token => {
      console.log(token);
    });
  }

  /** TODO. */
  public onSubmit(): void {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.invalid) {
      return;
    }

    this.register$.next(
      new Account({
        email: this.registerForm.value.email ?? '',
        firstName: this.registerForm.value.firstName ?? '',
        lastName: this.registerForm.value.lastName ?? '',
        password: this.registerForm.value.password ?? '',
      }),
    );
  }
}
