import { getAuthState } from '@js-camp/react/store/auth/dispatchers';
import { selectIsAuthorized, selectIsCheckingAuthorized } from '@js-camp/react/store/auth/selectors';
import { FC, useEffect, memo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { LoadingPage } from '../../shared/components/LoadingPage';
import { useAppDispatch, useAppSelector } from '../../store';
import { HOME_PAGE } from '../paths';

const UnauthorizedGuardComponent: FC = () => {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(selectIsAuthorized);
  const isChecking = useAppSelector(selectIsCheckingAuthorized);

  useEffect(() => {
    dispatch(getAuthState());
  }, [dispatch]);

  if (isChecking) {
    return <LoadingPage />;
  }

  return isAuthorized ? <Navigate to={HOME_PAGE}></Navigate> : <Outlet />;
};

export const UnauthorizedGuard = memo(UnauthorizedGuardComponent);
