import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenDto } from '@js-camp/core/dtos/token.dto';
import { HttpErrorMapper } from '@js-camp/core/mappers/httpError.mapper';
import { TokenMapper } from '@js-camp/core/mappers/token.mapper';
import { Account } from '@js-camp/core/models/account';
import { LoginData } from '@js-camp/core/models/loginData';
import { Token } from '@js-camp/core/models/token';
import { catchError, map, Observable, throwError } from 'rxjs';

import { environment } from '../../environments/environment';

const LOGIN_URL = '/api/v1/auth/login/';
const REGISTER_URL = '/api/v1/auth/register/';

/** Auth service. */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly loginUrl = environment.apiUrl + LOGIN_URL;

  private readonly registerUrl = environment.apiUrl + REGISTER_URL;

  public constructor(private readonly http: HttpClient) {}

  /**
   * Handle login.
   * @param data Login data of user.
   */
  public login(data: LoginData): Observable<Token> {
    return this.http.post<TokenDto>(this.loginUrl, {
      ...data,
    }).pipe(
      catchError((error: unknown) => {
        if (error instanceof HttpErrorResponse) {
          // Because pass error to throwError rxjs is deprecated.
          // eslint-disable-next-line rxjs/throw-error
          return throwError(() => HttpErrorMapper.fromDto(error.error));
        }
        return throwError(() => error);
      }),
      map(tokenDto => TokenMapper.fromDto(tokenDto)),
    );
  }

  /**
   * Handle register.
   * @param data Register data of user.
   */
  public register(data: Account): Observable<Token> {
    return this.http.post<TokenDto>(this.registerUrl, {
      ...data,
    }).pipe(

      catchError((error: unknown) => {
        if (error instanceof HttpErrorResponse) {
          // Because pass error to throwError rxjs is deprecated.
          // eslint-disable-next-line rxjs/throw-error
          return throwError(() => HttpErrorMapper.fromDto(error.error));
        }
        return throwError(() => error);
      }),
      map(tokenDto => TokenMapper.fromDto(tokenDto)),
    );
  }
}
