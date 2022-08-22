import { Injectable } from '@angular/core';
import { Token } from '@js-camp/core/models/token';
import {
  defer,
  map,
  merge,
  Observable,
  ReplaySubject,
  shareReplay,
  takeUntil,
} from 'rxjs';

import { LocalStorageService } from './local-storage.service';

const TOKEN_KEY = 'TOKEN_KEY';

/** Token service. */
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private _token$ = new ReplaySubject<Token | null>(1);

  private token$: Observable<Token | null>;

  public constructor(
    private readonly localStorageService: LocalStorageService,
  ) {
    const tokenFromStorage$ = defer(() =>
      localStorageService.getItem<Token | null>(TOKEN_KEY));
    this.token$ = merge(
      tokenFromStorage$.pipe(takeUntil(this._token$)),
      this._token$,
    ).pipe(shareReplay({ refCount: true, bufferSize: 1 }));
  }

  /** Return token stream. */
  public get(): Observable<Token | null> {
    return this.token$;
  }

  /**
   * Emit new token to token stream.
   * @param token New token to save.
   */
  public set(token: Token): Observable<Token> {
    this._token$.next(token);
    return defer(() => this.localStorageService.setItem(TOKEN_KEY, token)).pipe(
      map(() => token),
    );
  }

  /** Remove tokens from local storage. */
  public remove(): Observable<void> {
    this._token$.next(null);
    return defer(() => this.localStorageService.removeItem(TOKEN_KEY));
  }
}
