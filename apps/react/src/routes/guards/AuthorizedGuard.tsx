import { getAuthState } from '@js-camp/react/store/auth/dispatchers';
import {
  selectIsAuthorized,
  selectIsCheckingAuthorized,
} from '@js-camp/react/store/auth/selectors';
import { FC, memo, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { LOGIN_PAGE } from '../../features/auth/paths';
import { LoadingPage } from '../../shared/components/LoadingPage';
import { useAppDispatch, useAppSelector } from '../../store';

const AuthorizedGuardComponent: FC = () => {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(selectIsAuthorized);
  const isChecking = useAppSelector(selectIsCheckingAuthorized);

  useEffect(() => {
    dispatch(getAuthState());
  }, [dispatch]);

  if (isChecking) {
    return <LoadingPage />;
  }

  return isAuthorized ? <Outlet /> : <Navigate to={LOGIN_PAGE}></Navigate>;
};

export const AuthorizedGuard = memo(AuthorizedGuardComponent);
