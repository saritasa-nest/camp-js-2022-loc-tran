import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, switchMap, throwError } from 'rxjs';

import { AuthService } from '../services/auth.service';

import { TokenService } from '../services/token.service';
import { isProhibitedRoute } from '../utils/isProhibitedRoute';

/** Add jwt to api request. */
@Injectable()
export class Error401Interceptor implements HttpInterceptor {
  private authHeader = 'Authorization';

  private refreshRoute = '/api/v1/auth/token/refresh';

  public constructor(
    private readonly tokenService: TokenService,
    private readonly authService: AuthService,
  ) {}

  /**
   * Add jwt to request.
   * @param httpRequest Object to create clone method to attach the api key.
   * @param next Update request into the application.
   */
  public intercept(
    httpRequest: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return this.tokenService.get().pipe(
      switchMap(token =>
        next.handle(httpRequest).pipe(
          catchError((error: unknown) => {
            if (isProhibitedRoute(httpRequest.url, this.refreshRoute)) {
              return this.tokenService.remove().pipe(switchMap(() => next.handle(httpRequest)));
            }
            if (error instanceof HttpErrorResponse && token !== null && error.status === 401) {
              return this.authService
                .refreshToken()
                .pipe(switchMap(() => next.handle(httpRequest)));
            }
            return throwError(() => error);
          }),
        )),
    );
  }
}
