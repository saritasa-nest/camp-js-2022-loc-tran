import { FC } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { animeRoutes } from '../features/anime-list/routes';
import { authRoutes } from '../features/auth/routes';
import { genresRoutes } from '../features/genres/routes';
import { Header } from '../shared/components/Header';
import { PageNotFound } from '../shared/components/PageNotFound';
import { HOME_PAGE } from '../shared/components/PageNotFound/PageNotFound';

import { IsLoggedIn, IsNotLoggedIn } from './guards';

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
      <>
        <Header />
        <IsLoggedIn />
      </>
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
