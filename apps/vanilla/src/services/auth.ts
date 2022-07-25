import { HttpErrorDto } from '@js-camp/core/dtos/httpError.dto';
import { TokenDto } from '@js-camp/core/dtos/token.dto';
import { AccountMapper } from '@js-camp/core/mappers/account.mapper';
import { HttpErrorMapper } from '@js-camp/core/mappers/httpError.mapper';
import { TokenMapper } from '@js-camp/core/mappers/token.mapper';
import { Account } from '@js-camp/core/models/account';
import { LoginData } from '@js-camp/core/models/loginData';

import { http } from '../api';
import { ApiUrl } from '../namespaces/apiUrl';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../script/constants/localStorageName';

export namespace Auth {

  /**
   * Handle login request.
   * @param data Login data.
   */
  export async function login(data: LoginData): Promise<String[] | null> {
    try {
      const response = await http.post<TokenDto>(ApiUrl.login, data);
      const auth = TokenMapper.fromDto(response.data);
      localStorage.setItem(ACCESS_TOKEN, auth.accessToken);
      localStorage.setItem(REFRESH_TOKEN, auth.refreshToken);
      return null;
    } catch (error: unknown) {
      return handleErrorMessages(error);
    }
  }

  /**
   * Handle register request.
   * @param data Account data of user.
   */
  export async function register(data: Account): Promise<string[] | null> {
    try {
      const accountDataDto = AccountMapper.toDto(data);
      const response = await http.post(ApiUrl.register, accountDataDto);
      const auth = TokenMapper.fromDto(response.data);
      localStorage.setItem(ACCESS_TOKEN, auth.accessToken);
      localStorage.setItem(REFRESH_TOKEN, auth.refreshToken);
      return null;
    } catch (error: unknown) {
      return handleErrorMessages(error);
    }
  }

  /** Remove Access token and Refresh token from local storage. */
  // eslint-disable-next-line require-await
  export async function logout(): Promise<void> {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }
}

/**
 * Return error messages from http error.
 * @param error Http error.
 */
function handleErrorMessages(error: unknown): string[] {
  if (error instanceof HttpErrorDto)
  const errorData = HttpErrorMapper.fromDto(error as HttpErrorDto);
  const errorList = [];
  for (const i of Object.keys(errorData.data)) {
    errorList.push(...errorData.data[i]);
  }
  errorList.push(errorData.detail);
  return errorList;
}
