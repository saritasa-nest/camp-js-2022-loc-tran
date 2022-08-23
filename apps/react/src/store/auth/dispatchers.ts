import { Account } from '@js-camp/core/models/account';
import { LoginData } from '@js-camp/core/models/loginData';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '../../api/services/authService';

export const login = createAsyncThunk(
  'auth/login',
  (loginData: LoginData) => AuthService.login(loginData),
);

export const register = createAsyncThunk(
  'auth/register',
  async(account: Account, { rejectWithValue }) => {
    try {
      return await AuthService.register(account);
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);
