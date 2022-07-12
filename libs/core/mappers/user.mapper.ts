import { UserDto } from '../dtos/user.dto';
import { User } from '../models/user';

export namespace UserMapper {

  /**
   * Mapper for user data.
   * @param userDto User data dto.
   */
  export function fromDto(userDto: UserDto): User {
    return new User({
      email: userDto.email,
      firstName: userDto.first_name,
      lastName: userDto.last_name,
      avatar: userDto.avatar ?? null,
      created: new Date(userDto.created),
      modified: new Date(userDto.modified),
    });
  }
}
