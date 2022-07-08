import { AuthDto } from '@js-camp/core/dtos/auth.dto';
import { AuthMapper } from '@js-camp/core/mappers/auth.mapper';
import { Account } from '@js-camp/core/models/account';
import { Auth } from '@js-camp/core/models/auth';

import { http } from '../api';

/**
 * Handle login request.
 * @param account Store account data.
 */
export async function login(account: Account): Promise<Auth> {
  const response = await http.post<AuthDto>(account.email);
  const auth = AuthMapper.fromDto(response.data);
  return {
    accessToken: auth.accessToken,
    refreshToken: auth.refreshToken,
  };
}
