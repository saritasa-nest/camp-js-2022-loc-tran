import { TokenDto } from '@js-camp/core/dtos/token.dto';
import { TokenMapper } from '@js-camp/core/mappers/token.mapper';
import { Token } from '@js-camp/core/models/token';

import { http } from '../api';
import { REFRESH_URL, VERIFY_URL } from '../script/constants';

/**
 * Verify if a token is valid.
 * @param token Access token.
 */
export async function verifyToken(token: string): Promise<boolean> {
  try {
    await http.post(VERIFY_URL, {
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
  try {
    const response = await http.post<TokenDto>(REFRESH_URL, {
      token: refreshToken,
    });
    return TokenMapper.fromDto(response.data);
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
}

/**
 * Store tokens to local storage.
 * @param tokens Store Access token and Refresh token received.
 */
export function storeTokens(tokens: Token): void {
  localStorage.setItem('ACCESS_TOKEN', tokens.accessToken);
  localStorage.setItem('REFRESH_TOKEN', tokens.refreshToken);
}
