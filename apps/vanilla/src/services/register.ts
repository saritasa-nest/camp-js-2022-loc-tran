import { HttpErrorDto } from '@js-camp/core/dtos/httpError.dto';
import { AccountMapper } from '@js-camp/core/mappers/account.mapper';
import { HttpErrorMapper } from '@js-camp/core/mappers/httpError.mapper';
import { TokenMapper } from '@js-camp/core/mappers/token.mapper';
import { Account } from '@js-camp/core/models/account';

import { http } from '../api';
import { ApiUrl } from '../namespaces/apiUrl';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../script/constants/localStorageName';

/**
 * Handle register request.
 * @param data Account data of user.
 */
export async function register(data: Account): Promise<Array<string> | null> {
  try {
    const accountDataDto = AccountMapper.toDto(data);
    const response = await http.post(ApiUrl.register, accountDataDto);
    const auth = TokenMapper.fromDto(response.data);
    localStorage.setItem(ACCESS_TOKEN, auth.accessToken);
    localStorage.setItem(REFRESH_TOKEN, auth.refreshToken);
    return null;
  } catch (error: unknown) {
    const errorData = HttpErrorMapper.fromDto(error as HttpErrorDto);
    const errorList = [];
    for (const i of Object.keys(errorData.data)) {
      errorList.push(...errorData.data[i]);
    }
    errorList.push(errorData.detail);
    return errorList;
  }
}
