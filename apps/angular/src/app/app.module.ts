import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorTailorModule } from '@ngneat/error-tailor';

import { AuthInterceptor } from '../core/interceptors/auth.interceptor';
import { RefreshTokenInterceptor } from '../core/interceptors/refresh-token-handling.interceptor';
import { ApiInterceptor } from '../core/interceptors/api-key.interceptor';

import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const ERROR_TAILOR_CONFIG = {
  errors: {
    useValue: {
      required: 'This field is required',
      notSame: 'Confirm password must matched',
      invalidData: (error: string) => error,
    },
  },
};

/** App module. */
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ErrorTailorModule.forRoot(ERROR_TAILOR_CONFIG),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
