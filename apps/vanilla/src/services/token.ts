import { TokenDto } from '@js-camp/core/dtos/token.dto';
import { TokenMapper } from '@js-camp/core/mappers/token.mapper';
import { Token } from '@js-camp/core/models/token';

import { http } from '../api';
import { ApiUrl } from '../namespaces/apiUrl';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../script/constants';

import { LocalStorageService } from './localStorageService';

/**
 * Verify if a token is valid.
 * @param token Access token.
 */
export async function verifyToken(token: string): Promise<boolean> {
  try {
    await http.post(ApiUrl.verify, {
      token,
    });
    return true;
  } catch (error: unknown) {
    return false;
  }
}

/**
 * Return the refreshed token.
 * @param refreshToken Refresh token.
 */
export async function getRefreshedToken(refreshToken: string): Promise<Token> {
  const response = await http.post<TokenDto>(ApiUrl.refresh, {
    token: refreshToken,
  });
  return TokenMapper.fromDto(response.data);
}

/**
 * Store tokens to local storage.
 * @param tokens Store Access token and Refresh token received.
 */
export function storeTokens(tokens: Token): void {
  LocalStorageService.set(ACCESS_TOKEN, tokens.accessToken);
  LocalStorageService.set(REFRESH_TOKEN, tokens.refreshToken);
}
