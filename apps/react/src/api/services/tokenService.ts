import { TokenDto } from '@js-camp/core/dtos/token.dto';
import { TokenMapper } from '@js-camp/core/mappers/token.mapper';
import { Token } from '@js-camp/core/models/token';

import { http } from '..';

import { StorageService } from './localStorageService';

const TOKEN_KEY = 'AUTH_TOKEN';

const REFRESH_URL = 'auth/token/refresh/';

export namespace TokenService {

  /**
   * Return the refreshed token.
   * @param refreshToken Refresh token.
   */
  export async function getRefreshedToken(
    refreshToken: string,
  ): Promise<Token> {
    const response = await http.post<TokenDto>(REFRESH_URL, {
      refresh: refreshToken,
    });
    return TokenMapper.fromDto(response.data);
  }

  /**
   * Store tokens to local storage.
   * @param tokens Store Access token and Refresh token received.
   */
  export async function storeTokens(tokens: Token): Promise<void> {
    await StorageService.save(TOKEN_KEY, tokens);
  }

  /** Get tokens from local storage. */
  export async function getTokensFromStorage(): Promise<Token | null> {
    const tokens = await StorageService.get<Token>(TOKEN_KEY);
    if (tokens === null) {
      return null;
    }
    return tokens;
  }

  /** Remove tokens from local storage. */
  export async function removeTokens(): Promise<void> {
    await StorageService.remove(TOKEN_KEY);
  }
}
