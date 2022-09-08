import { configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook, useDispatch, useSelector,
} from 'react-redux';

import { animeListSlice } from './anime/slice';
import { animeDetailSlice } from './animeDetail/slice';
import { animeManagementSlice } from './animeManagement/slice';
import { authSlice } from './auth/slice';
import { genresSlice } from './genre/slice';
import { studiosSlice } from './studio/slice';

export const store = configureStore({
  reducer: {
    genres: genresSlice.reducer,
    auth: authSlice.reducer,
    animeList: animeListSlice.reducer,
    animeDetail: animeDetailSlice.reducer,
    animeManagement: animeManagementSlice.reducer,
    studios: studiosSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    // We need to disable this check to allow ES6 classes in Redux.
    // You can find more info about this middleware in docs:
    // https://redux-toolkit.js.org/api/serializabilityMiddleware
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/** Typed `useDispatch` hook. */
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
