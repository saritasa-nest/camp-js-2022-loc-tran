import { UserDto } from '@js-camp/core/dtos/user.dto';
import { UserMapper } from '@js-camp/core/mappers/user.mapper';
import { User } from '@js-camp/core/models/user';

import { PROFILE_URL } from '../script/constants';
import { http } from '../api';

import { getRefreshedToken, storeTokens, verifyToken } from './token';

/** Get user data for profile page. */
export async function getUserData(): Promise<User | Error> {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  const refreshToken = localStorage.getItem('REFRESH_TOKEN');
  if (accessToken === null || refreshToken === null) {
    return new Error();
  }
  const isValidToken = await verifyToken(accessToken);
  if (isValidToken === false) {
    const tokens = await getRefreshedToken(refreshToken);
    storeTokens(tokens);
  }

  try {
    const response = await http.get<UserDto>(PROFILE_URL);
    return UserMapper.fromDto(response.data);
  } catch (error: unknown) {
    return new Error((error as Error).message);
  }
}
