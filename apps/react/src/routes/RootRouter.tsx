import { FC } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { animeRoutes } from '../features/anime-list/routes';
import { authRoutes } from '../features/auth/routes';
import { genresRoutes } from '../features/genres/routes';
import { PageNotFound } from '../shared/components/PageNotFound';

import { IsLoggedIn, IsNotLoggedIn } from './guards';
import { HOME_PAGE } from './guards/IsNotLoggedIn';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={HOME_PAGE}/>,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
  {
    element: (
      <IsLoggedIn />
    ),
    children: [...genresRoutes, ...animeRoutes],
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
