import { Injectable } from '@angular/core';
import { Token } from '@js-camp/core/models/token';

import { LocalStorageService } from './local-storage.service';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN';

/** Token service. */
@Injectable({
  providedIn: 'root',
})
export class TokenService {

  public constructor(private readonly localStorageService: LocalStorageService) { }

  /**
   * Store token into local storage.
   * @param token Token to store.
   */
  public async store(token: Token): Promise<void> {
    await this.localStorageService.setItem(ACCESS_TOKEN_KEY, token.accessToken);
    await this.localStorageService.setItem(REFRESH_TOKEN_KEY, token.refreshToken);
  }

  /** Get access token from local storage. */
  public async getAccessToken(): Promise<string | null> {
    const token = await this.localStorageService.getItem<string>(ACCESS_TOKEN_KEY);
    return token;
  }

  /** Get refresh token from local storage. */
  public async getRefreshToken(): Promise<string | null> {
    const token = await this.localStorageService.getItem<string>(REFRESH_TOKEN_KEY);
    return token;
  }
}
