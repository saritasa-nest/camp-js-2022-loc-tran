import { LoginDataDto } from '../dtos/loginData.dto';
import { LoginData } from '../models/loginData';

export namespace LoginDataMapper {

  /**
   * Mapper for login data.
   * @param loginData Login data dto.
   */
  export function toDto(loginData: LoginData): LoginDataDto {
    return {
      email: loginData.email,
      password: loginData.password,
    };
  }
}
