import { FC } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { authRoutes } from '../features/auth/routes';
import { genresRoutes } from '../features/genres/routes';
import { PageNotFound } from '../shared/components/PageNotFound';

import { IsLoggedIn, IsNotLoggedIn } from './guards';

const routes: RouteObject[] = [
  {
    path: '*',
    element: <PageNotFound />,
  },
  {
    element: (
      <IsLoggedIn />
    ),
    children: [...genresRoutes],
  },
  {
    element: (
      <IsNotLoggedIn />
    ),
    children: [...authRoutes],
  },
];

/** Root router component. */
export const RootRouter: FC = () => useRoutes(routes);
