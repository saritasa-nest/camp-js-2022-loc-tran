import { FC } from 'react';
import { Navigate, Outlet, RouteObject, useRoutes } from 'react-router-dom';

import { authRoutes } from '../features/auth/routes';
import { genresRoutes } from '../features/genres/routes';
import { Header } from '../shared/components/Header';

const routes: RouteObject[] = [
  {
    path: '*',
    element: <Navigate to={'/genres'} />,
  },
  {
    element: <><Header /><Outlet /></>,
    children: [...genresRoutes],
  },
  ...authRoutes,
];

/** Root router component. */
export const RootRouter: FC = () => useRoutes(routes);
