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
import {
  catchError,
  filter,
  map,
  Observable,
  switchMap,
  tap,
  throwError,
} from 'rxjs';

import { AppConfigService } from './app-config.service';

import { TokenService } from './token.service';

const LOGIN_URL = '/api/v1/auth/login/';
const REGISTER_URL = '/api/v1/auth/register/';
const REFRESH_URL = '/api/v1/auth/token/refresh/';

/** Auth service. */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly refreshApiAddress = new URL(REFRESH_URL, this.appConfig.apiUrl);

  private readonly loginApiAddress = new URL(LOGIN_URL, this.appConfig.apiUrl);

  private readonly registerApiAddress = new URL(REGISTER_URL, this.appConfig.apiUrl);

  public constructor(
    private readonly http: HttpClient,
    private readonly tokenService: TokenService,
    private readonly appConfig: AppConfigService,
  ) {}

  /**
   * Handle login.
   * @param data Login data of user.
   */
  public login(data: LoginData): Observable<Token> {
    return this.http
      .post<TokenDto>(this.loginApiAddress.href, {
      ...LoginDataMapper.toDto(data),
    })
      .pipe(
        catchError((error: unknown) => this.handleErrorAuthorization(error)),
        map(tokenDto => TokenMapper.fromDto(tokenDto)),
      );
  }

  /**
   * Handle register.
   * @param data Register data of user.
   */
  public register(data: Account): Observable<Token> {
    return this.http
      .post<TokenDto>(this.registerApiAddress.href, {
      ...AccountMapper.toDto(data),
    })
      .pipe(
        catchError((error: unknown) => this.handleErrorAuthorization(error)),
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
    return token$.pipe(
      filter((token): token is Token => token !== null),
      switchMap(token =>
        this.http.post<TokenDto>(this.refreshApiAddress.href, {
          refresh: TokenMapper.toDto(token).refresh,
        })),
      map(tokenDto => TokenMapper.fromDto(tokenDto)),
      tap(newToken => this.tokenService.set(newToken)),
      catchError(() => this.tokenService.remove()),
    );
  }

  /**
   * Handle error return from BE.
   * @param error Error returned.
   */
  private handleErrorAuthorization(error: unknown): Observable<TokenDto> {
    if (error instanceof HttpErrorResponse) {
      // Because pass error to throwError rxjs is deprecated.
      // eslint-disable-next-line rxjs/throw-error
      return throwError(() => HttpErrorMapper.fromDto(error.error));
    }
    return throwError(() => error);
  }
}
