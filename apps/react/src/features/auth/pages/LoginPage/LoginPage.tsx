import { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

/** Login page component. */
const LoginPageComponent: FC = () => (
  <>
    <Outlet />
  </>
);

export const LoginPage = memo(LoginPageComponent);
