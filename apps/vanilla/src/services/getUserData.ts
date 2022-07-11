import { UserDto } from '@js-camp/core/dtos/user.dto';
import { UserMapper } from '@js-camp/core/mappers/user.mapper';
import { User } from '@js-camp/core/models/user';

import { http } from '../api';
import { PROFILE_URL } from '../script/constants';

/** Get user data for profile page. */
export async function getUserData(): Promise<User> {
  const response = await http.get<UserDto>(PROFILE_URL);
  const userData = UserMapper.fromDto(response.data);
  return userData;
}
