import { HTTPErrorDto } from '@js-camp/core/dtos/httpError.dto';
import { AccountMapper } from '@js-camp/core/mappers/account.mapper';
import { HttpErrorMapper } from '@js-camp/core/mappers/httpError.mapper';
import { TokenMapper } from '@js-camp/core/mappers/token.mapper';
import { Account } from '@js-camp/core/models/account';
import { Token } from '@js-camp/core/models/token';

import { http } from '../api';
import { REGISTER_URL } from '../script/constants';
import { showErrorRegister } from '../script/renderToUI';

/**
 * Handle register request.
 * @param data Account data of user.
 */
export async function register(data: Account): Promise<Token> {
  try {
    const accountDataDto = AccountMapper.toDto(data);
    const response = await http.post(REGISTER_URL, accountDataDto);
    return TokenMapper.fromDto(response.data);
  } catch (error: unknown) {
    const errorData = HttpErrorMapper.fromDto(error as HTTPErrorDto);
    const errorList = [];
    for (const i of Object.keys(errorData.data)) {
      errorList.push(...errorData.data[i]);
    }
    errorList.push(errorData.detail);
    showErrorRegister(errorList);
    throw new Error((error as Error).message);
  }
}
