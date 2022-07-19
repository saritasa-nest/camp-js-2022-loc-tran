import { HttpErrorMapper } from '@js-camp/core/mappers/httpError.mapper';
import { HttpErrorDto } from '@js-camp/core/dtos/httpError.dto';
import { TokenDto } from '@js-camp/core/dtos/token.dto';
import { TokenMapper } from '@js-camp/core/mappers/token.mapper';
import { LoginData } from '@js-camp/core/models/loginData';

import { http } from '../api';
import { ApiUrl } from '../namespaces/apiUrl';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../script/constants/localStorageName';

/**
 * Handle login request.
 * @param data Login data.
 */
export async function login(data: LoginData): Promise<Array<string> | null> {
  try {
    const response = await http.post<TokenDto>(ApiUrl.login, data);
    const auth = TokenMapper.fromDto(response.data);
    localStorage.setItem(ACCESS_TOKEN, auth.accessToken);
    localStorage.setItem(REFRESH_TOKEN, auth.refreshToken);
    return null;
  } catch (error: unknown) {
    const errorData = HttpErrorMapper.fromDto(error as HttpErrorDto);
    const errorList = [];
    if (errorData.data !== undefined) {
      for (const i of Object.keys(errorData.data)) {
        errorList.push(...errorData.data[i]);
      }
    }
    errorList.push(errorData.detail);
    return errorList;
  }
}
