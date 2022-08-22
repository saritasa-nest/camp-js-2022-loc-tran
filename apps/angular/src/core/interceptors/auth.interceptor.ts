import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

import { TokenService } from '../services/token.service';

import { isProtectedRoute } from './isProtectedRoute';

/** Add jwt to api request. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly authHeader = 'Authorization';

  private readonly authRoute = '/auth';

  public constructor(private readonly tokenService: TokenService) {}

  /**
   * Add jwt to request.
   * @param httpRequest Object to create clone method to attach the api key.
   * @param next Update request into the application.
   */
  public intercept(
    httpRequest: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    if (isProtectedRoute(new URL(httpRequest.url), this.authRoute)) {
      return next.handle(httpRequest);
    }
    return this.tokenService.get().pipe(
      switchMap(token => {
        if (token?.accessToken !== undefined) {
          return next.handle(
            httpRequest.clone({
              setHeaders: { [this.authHeader]: `Bearer ${token.accessToken}` },
            }),
          );
        }
        return next.handle(httpRequest);
      }),
    );
  }
}
