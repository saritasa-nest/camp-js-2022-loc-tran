import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

const AUTH_HEADER = 'Authorization';

/** Add jwt to api request. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private apiKey = 'Api-Key';

  /**
   * Add jwt to request.
   * @param httpRequest Object to create clone method to attach the api key.
   * @param next Update request into the application.
   */
  public intercept(
    httpRequest: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(
      httpRequest.clone({ setHeaders: { [AUTH_HEADER]: environment.apiKey } }),
    );
  }
}
