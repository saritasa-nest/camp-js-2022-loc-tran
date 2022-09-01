import { HttpErrorMapper } from '@js-camp/core/mappers/httpError.mapper';
import { Account } from '@js-camp/core/models/account';
import { FormError } from '@js-camp/core/models/httpError';
import { LoginData } from '@js-camp/core/models/loginData';
import { Token } from '@js-camp/core/models/token';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AuthService } from '../../api/services/authService';
import { TokenService } from '../../api/services/tokenService';

export const login = createAsyncThunk<
  Token,
  LoginData,
  {
    rejectValue: FormError;
  }
>(
  'auth/login',
  async(account, { rejectWithValue }) => {
    try {
      return await AuthService.login(account);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return rejectWithValue(HttpErrorMapper.fromDto(error.response?.data));
      }
      throw error;
    }
  },
);

export const register = createAsyncThunk<
Token,
Account,
{
  rejectValue: FormError;
}
>(
  'auth/register',
  async(account, { rejectWithValue }) => {
    try {
      return await AuthService.register(account);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return rejectWithValue(HttpErrorMapper.fromDto(error.response?.data));
      }
      throw error;
    }
  },
);

export const getAuthState = createAsyncThunk<boolean>(
  'auth/getAuthState',
  async() => {
    const tokens = await TokenService.getTokensFromStorage();
    if (tokens !== null) {
      return true;
    }
    return false;
  },
);

export const logout = createAsyncThunk<void>(
  'auth/logout',
  async() => {
    await TokenService.removeTokens();
  },
);
