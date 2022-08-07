import { Injectable } from '@angular/core';
import { Token } from '@js-camp/core/models/token';
import { defer, merge, Observable, ReplaySubject, takeUntil } from 'rxjs';

import { LocalStorageService } from './local-storage.service';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN';

/** Token service. */
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private _token$ = new ReplaySubject<Token | null>(1);

  private token$: Observable<Token | null>;

  public constructor(private readonly localStorageService: LocalStorageService) {
    const tokenFromStorage$ = defer(() => localStorageService.getItem<Token | null>(ACCESS_TOKEN_KEY));
    this.token$ = merge(
      tokenFromStorage$.pipe(takeUntil(this._token$)),
      this._token$,
    );
  }

  public getToken(): Observable<Token | null> {
    return this.token$;
  }
}
