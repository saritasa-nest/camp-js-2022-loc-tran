import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AnimePage = lazy(() =>
  import('./pages/AnimePage').then(module => ({ default: module.AnimePage })));

const AnimeDetailPage = lazy(() =>
  import('./pages/AnimeDetailPage').then(module => ({ default: module.AnimeDetailPage })));

const AnimeEditPage = lazy(() =>
  import('./pages/AnimeEditPage').then(module => ({ default: module.AnimeEditPage })));

const AnimeAddPage = lazy(() =>
  import('./pages/AnimeAddPage').then(module => ({ default: module.AnimeAddPage })));

export const animeRoutes: RouteObject[] = [
  {
    path: 'anime',
    element: <AnimePage />,
    children: [
      {
        path: ':animeId',
        element: <AnimeDetailPage />,
      },
      {
        path: 'edit/:animeId',
        element: <AnimeEditPage />,
      },
      {
        path: 'add',
        element: <AnimeAddPage />,
      },
    ],
  },
];
