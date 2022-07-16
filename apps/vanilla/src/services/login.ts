import { HttpErrorMapper } from '@js-camp/core/mappers/httpError.mapper';
import { HTTPErrorDto } from '@js-camp/core/dtos/httpError.dto';
import { TokenDto } from '@js-camp/core/dtos/token.dto';
import { TokenMapper } from '@js-camp/core/mappers/token.mapper';
import { Token } from '@js-camp/core/models/token';
import { LoginData } from '@js-camp/core/models/loginData';

import { http } from '../api';
import { LOGIN_URL } from '../script/constants';
import { showErrorLogin } from '../script/renderToUI';

/**
 * Handle login request.
 * @param data Login data.
 */
export async function login(data: LoginData): Promise<Token> {
  try {
    const response = await http.post<TokenDto>(LOGIN_URL, data);
    return TokenMapper.fromDto(response.data);
  } catch (error: unknown) {
    const errorData = HttpErrorMapper.fromDto(error as HTTPErrorDto);
    const errorList = [];
    if (errorData.data !== undefined) {
      for (const i of Object.keys(errorData.data)) {
        errorList.push(...errorData.data[i]);
      }
    }
    errorList.push(errorData.detail);
    showErrorLogin(errorList);
    throw new Error((error as Error).message);
  }
}
