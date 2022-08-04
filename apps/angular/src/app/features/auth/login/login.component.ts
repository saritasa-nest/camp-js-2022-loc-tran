import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Token } from '@js-camp/core/models/token';
import { AuthService } from 'apps/angular/src/core/services/auth.service';
import { catchError, of } from 'rxjs';

/** Login component. */
@Component({
  selector: 'camp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  /** Form group to manage login information. */
  public readonly loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  public constructor(private readonly fb: FormBuilder, private authService: AuthService) {
  }

  /** Handle submit for login form. */
  public onSubmit(): void {
    // eslint-disable-next-line no-console
    console.log(this.loginForm.value);
    this.authService.login({
      email: this.loginForm.value.email ?? '',
      password: this.loginForm.value.password ?? '',
    }).pipe(catchError((error: unknown) => {
      console.log(error);
      return of(new Token({ accessToken: '', refreshToken: '' }));
    }))
      .subscribe(v => {
    // eslint-disable-next-line no-console
      console.log(v);
    });
  }
}
