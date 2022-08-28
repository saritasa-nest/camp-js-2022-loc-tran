import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { Header } from '../../shared/components/Header';

const GenresPage = lazy(() => import('./pages/GenresPage').then(module => ({ default: module.GenresPage })));

export const genresRoutes: RouteObject[] = [
  {
    element: <Header />,
    children: [
      {
        path: 'genres',
        element: <GenresPage />,
      },
    ],
  },
];
