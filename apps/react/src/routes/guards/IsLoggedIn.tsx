import { getAuthState } from '@js-camp/react/store/auth/dispatchers';
import {
  selectIsAuthorized,
  selectIsCheckingAuthorized,
} from '@js-camp/react/store/auth/selectors';
import { FC, memo, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { LoadingPage } from '../../features/shared/components/LoadingPage';

import { useAppDispatch, useAppSelector } from '../../store';

export const LOGIN_PAGE = '/login';

const IsLoggedInComponent: FC = () => {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(selectIsAuthorized);
  const isChecking = useAppSelector(selectIsCheckingAuthorized);

  useEffect(() => {
    dispatch(getAuthState());
  }, [dispatch, getAuthState]);

  if (isChecking) {
    return <LoadingPage />;
  }

  return isAuthorized ? <Outlet /> : <Navigate to={LOGIN_PAGE}></Navigate>;
};

export const IsLoggedIn = memo(IsLoggedInComponent);
