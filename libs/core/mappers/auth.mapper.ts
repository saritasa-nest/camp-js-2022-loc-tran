import { AuthDto } from '../dtos/auth.dto';
import { Auth } from '../models/auth';

export namespace AuthMapper {

  /**
   * Maps dto to model.
   * @param authDto Auth dto data.
   */
  export function fromDto(authDto: AuthDto): Auth {
    return {
      accessToken: authDto.access,
      refreshToken: authDto.refresh,
    };
  }
}
