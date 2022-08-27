import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { IsLoggedIn } from '../../routes/guards';

const GenresPage = lazy(() => import('./pages/GenresPage').then(module => ({ default: module.GenresPage })));

export const genresRoutes: RouteObject[] = [
  {
    element: <IsLoggedIn />,
    children: [
      {
        path: 'genres',
        element: <GenresPage />,
      },
    ],
  },
];
