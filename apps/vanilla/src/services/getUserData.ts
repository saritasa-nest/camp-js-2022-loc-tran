import { UserDto } from '@js-camp/core/dtos/user.dto';
import { UserMapper } from '@js-camp/core/mappers/user.mapper';
import { User } from '@js-camp/core/models/user';

import { http } from '../api';
import { ApiUrl } from '../namespaces/apiUrl';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../script/constants/localStorageName';
import { renderAuthenticatedLink } from '../script/renderToUI';

import { LocalStorageService } from './localStorageService';

/** Get user data for profile page. */
export async function getUserData(): Promise<User> {
  const accessToken = LocalStorageService.get(ACCESS_TOKEN);
  const refreshToken = LocalStorageService.get(REFRESH_TOKEN);
  if (accessToken === null || refreshToken === null) {
    renderAuthenticatedLink();
    throw new Error('Token not found');
  }
  const response = await http.get<UserDto>(ApiUrl.profile);
  return UserMapper.fromDto(response.data);
}
