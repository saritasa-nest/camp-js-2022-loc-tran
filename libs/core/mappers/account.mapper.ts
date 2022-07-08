import { AccountDto } from '../dtos/account.dto';
import { Account } from '../models/account';

export namespace AccountMapper {

  /**
   * Maps dto to model.
   * @param account Account data.
   */
  export function toDto(account: Account): AccountDto {
    const accountDto: AccountDto = {
      email: account.email,
      first_name: account.firstName,
      last_name: account.lastName,
      password: account.password,
    };
    return accountDto;
  }
}
