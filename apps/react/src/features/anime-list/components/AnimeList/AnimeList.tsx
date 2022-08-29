import { fetchAnime } from '@js-camp/react/store/anime/dispatchers';
import {
  selectAnimeList,
  selectIsAnimeListLoading,
} from '@js-camp/react/store/anime/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { Skeleton } from '@mui/material';
import { FC, memo, useEffect } from 'react';

import { Anime } from '../Anime';

import styles from './AnimeList.module.css';

const AnimeListComponent: FC = () => {
  const dispatch = useAppDispatch();
  const animeList = useAppSelector(selectAnimeList);
  const isLoading = useAppSelector(selectIsAnimeListLoading);

  useEffect(() => {
    dispatch(fetchAnime());
  }, [dispatch, fetchAnime]);

  if (isLoading) {
    return <div className={styles['skeleton']}>
      <Skeleton variant="rectangular" width={100} height={100} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
    </div>;
  }

  const list = animeList.map(anime => <Anime anime={anime} key={anime.id} />);

  return <>{list}</>;
};

export const AnimeList = memo(AnimeListComponent);
