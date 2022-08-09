import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenDto } from '@js-camp/core/dtos/token.dto';
import { AccountMapper } from '@js-camp/core/mappers/account.mapper';
import { HttpErrorMapper } from '@js-camp/core/mappers/httpError.mapper';
import { LoginDataMapper } from '@js-camp/core/mappers/loginData.mapper';
import { TokenMapper } from '@js-camp/core/mappers/token.mapper';
import { Account } from '@js-camp/core/models/account';
import { LoginData } from '@js-camp/core/models/loginData';
import { Token } from '@js-camp/core/models/token';
import { catchError, filter, map, Observable, switchMap, tap, throwError } from 'rxjs';

import { environment } from '../../environments/environment';

import { TokenService } from './token.service';

const LOGIN_URL = '/api/v1/auth/login/';
const REGISTER_URL = '/api/v1/auth/register/';
const REFRESH_URL = '/api/v1/auth/token/refresh/';

/** Auth service. */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly refreshUrl = environment.apiUrl + REFRESH_URL;

  private readonly loginUrl = environment.apiUrl + LOGIN_URL;

  private readonly registerUrl = environment.apiUrl + REGISTER_URL;

  public constructor(private readonly http: HttpClient, private readonly tokenService: TokenService) {}

  /**
   * Handle login.
   * @param data Login data of user.
   */
  public login(data: LoginData): Observable<Token> {
    return this.http.post<TokenDto>(this.loginUrl, {
      ...LoginDataMapper.toDto(data),
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
      ...AccountMapper.toDto(data),
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

  /** Check is user logged in or not. */
  public isLoggedIn(): Observable<boolean> {
    const token$ = this.tokenService.get();
    return token$.pipe(map(token => token !== null));
  }

  /** Check is user not logged in. */
  public isNotLoggedIn(): Observable<boolean> {
    const token$ = this.tokenService.get();
    return token$.pipe(map(token => token === null));
  }

  /** Log the user out. */
  public logout(): Observable<void> {
    return this.tokenService.remove();
  }

  /** Get new token. */
  public refreshToken(): Observable<Token | void> {
    const token$ = this.tokenService.get();
    return token$.pipe(filter((token): token is Token => token !== null),
      switchMap(token => this.http.post<TokenDto>(this.refreshUrl, { refresh: TokenMapper.toDto(token).refresh })),
      map(tokenDto => TokenMapper.fromDto(tokenDto)),
      tap(newToken => this.tokenService.set(newToken)),
      catchError(() => this.tokenService.remove()));
  }
}
