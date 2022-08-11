import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfigService } from '../services/app-config.service';

/** Interceptor for api request. */
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private readonly apiKey = 'Api-Key';

  public constructor(private readonly appConfig: AppConfigService) {}

  /**
   * Add api key to request.
   * @param httpRequest Object to create clone method to attach the api key.
   * @param next Update request into the application.
   */
  public intercept(
    httpRequest: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(
      httpRequest.clone({ setHeaders: { [this.apiKey]: this.appConfig.apiKey } }),
    );
  }
}
