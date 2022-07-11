import { TokenDto } from '../dtos/token.dto';
import { Token } from '../models/token';

export namespace TokenMapper {

  /**
   * Maps dto to model.
   * @param tokenDto Auth dto data.
   */
  export function fromDto(tokenDto: TokenDto): Token {
    const token = new Token({
      accessToken: tokenDto.access,
      refreshToken: tokenDto.refresh,
    });
    return token;
  }
}
