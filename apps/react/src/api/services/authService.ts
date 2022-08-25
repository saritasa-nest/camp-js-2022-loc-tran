import { TokenDto } from '@js-camp/core/dtos/token.dto';
import { TokenMapper } from '@js-camp/core/mappers/token.mapper';
import { Account } from '@js-camp/core/models/account';
import { LoginData } from '@js-camp/core/models/loginData';
import { Token } from '@js-camp/core/models/token';

import { http } from '..';

import { TokenService } from './tokenService';

const LOGIN_URL = 'auth/login/';
const REGISTER_URL = 'auth/register/';

export namespace AuthService {

  /**
   * Login and get tokens.
   * @param userData User login data.
   */
  export async function login(userData: LoginData): Promise<Token> {
    const { data } = await http.post<TokenDto>(LOGIN_URL, userData);
    const tokens = TokenMapper.fromDto(data);
    TokenService.storeTokens(tokens);
    return tokens;
  }

  /**
   * Register new user and get tokens.
   * @param accountData Account data for register.
   */
  export async function register(accountData: Account): Promise<Token> {
    const { data } = await http.post<TokenDto>(REGISTER_URL, accountData);
    const tokens = TokenMapper.fromDto(data);
    TokenService.storeTokens(tokens);
    return tokens;
  }
}
