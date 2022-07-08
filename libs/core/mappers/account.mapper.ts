import { AccountDto } from '../dtos/account.dto';
import { Account } from '../models/account';

export namespace AccountMapper {

  /**
   * Maps model to dto.
   * @param account Account data.
   */
  export function toDto(account: Account): AccountDto {
    return {
      email: account.email,
      first_name: account.firstName,
      last_name: account.lastName,
      password: account.password,
    };
  }
}
