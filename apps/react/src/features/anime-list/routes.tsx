import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AnimePage = lazy(() =>
  import('./pages/AnimePage').then(module => ({ default: module.AnimePage })));

const AnimeDetailPage = lazy(() =>
  import('./pages/AnimeDetailPage').then(module => ({ default: module.AnimeDetailPage })));

export const animeRoutes: RouteObject[] = [
  {
    path: 'anime',
    element: <AnimePage />,
    children: [
      {
        path: ':animeId',
        element: <AnimeDetailPage />,
      },
    ],
  },
];
