import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { Header } from '../../shared/components/Header';

const AnimePage = lazy(() =>
  import('./pages/AnimePage').then(module => ({ default: module.AnimePage })));

export const animeRoutes: RouteObject[] = [
  {
    element: <Header />,
    children: [
      {
        path: 'anime',
        element: <AnimePage />,
      },
    ],
  },
];
