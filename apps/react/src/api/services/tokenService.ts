import { TokenDto } from '@js-camp/core/dtos/token.dto';
import { TokenMapper } from '@js-camp/core/mappers/token.mapper';
import { Token } from '@js-camp/core/models/token';

import { http } from '..';

import { StorageService } from './localStorageService';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN';

const REFRESH_URL = 'auth/refresh/';

export namespace TokenService {

  /**
   * Return the refreshed token.
   * @param refreshToken Refresh token.
   */
  export async function getRefreshToken(
    refreshToken: string,
  ): Promise<Token> {
    const response = await http.post<TokenDto>(REFRESH_URL, {
      token: refreshToken,
    });
    return TokenMapper.fromDto(response.data);
  }

  /**
   * Store tokens to local storage.
   * @param tokens Store Access token and Refresh token received.
   */
  export async function storeTokens(tokens: Token): Promise<void> {
    await StorageService.save(ACCESS_TOKEN_KEY, tokens.accessToken);
    await StorageService.save(REFRESH_TOKEN_KEY, tokens.refreshToken);
  }

  /** Get tokens from local storage. */
  export async function getTokensFromStorage(): Promise<Token | null> {
    const accessToken = await StorageService.get<string>(ACCESS_TOKEN_KEY);
    const refreshToken = await StorageService.get<string>(REFRESH_TOKEN_KEY);
    if (accessToken === null || refreshToken === null) {
      return null;
    }
    return new Token({
      accessToken,
      refreshToken,
    });
  }
}
