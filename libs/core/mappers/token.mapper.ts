import { TokenDto } from '../dtos/token.dto';
import { Token } from '../models/token';

export namespace TokenMapper {

  /**
   * Maps dto to model.
   * @param tokenDto Auth dto data.
   */
  export function fromDto(tokenDto: TokenDto): Token {
    return new Token({
      accessToken: tokenDto.access,
      refreshToken: tokenDto.refresh,
    });
  }

  /**
   * Maps token from model to dto.
   * @param token Token data.
   */
  export function toDto(token: Token): TokenDto {
    return {
      access: token.accessToken,
      refresh: token.refreshToken,
    };
  }
}
