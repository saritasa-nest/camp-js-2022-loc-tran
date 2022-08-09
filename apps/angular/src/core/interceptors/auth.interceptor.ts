import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

import { environment } from '../../environments/environment';

import { TokenService } from '../services/token.service';

/** Add jwt to api request. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private authHeader = 'Authorization';

  private authRoute = '/api/v1/auth';

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
    if (this.isAuthRoute(httpRequest.url)) {
      return next.handle(httpRequest);
    }
    return this.tokenService.get().pipe(
      switchMap(token => {
        if (token?.accessToken !== undefined) {
          return next.handle(
            httpRequest.clone({
              setHeaders: { [this.authHeader]: `Bearer ${token?.accessToken}` },
            }),
          );
        }
        return next.handle(httpRequest);
      }),
    );
  }

  private isAuthRoute(url: string): boolean {
    return url.includes(environment.apiUrl + this.authRoute);
  }
}
