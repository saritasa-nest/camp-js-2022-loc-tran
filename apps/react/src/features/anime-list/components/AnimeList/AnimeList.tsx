import { fetchAnime } from '@js-camp/react/store/anime/dispatchers';
import {
  selectAnimeList,
  selectIsAnimeListLoading,
} from '@js-camp/react/store/anime/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { Skeleton } from '@mui/material';
import { useInfiniteScroll } from '../../../../hooks/useInfiniteScroll';
import { FC, memo, useEffect } from 'react';

import { Anime } from '../Anime';

import styles from './AnimeList.module.css';

const AnimeListComponent: FC = () => {
  const { setLastElement } = useInfiniteScroll(() => console.log('Reached!'))
  const dispatch = useAppDispatch();
  const animeList = useAppSelector(selectAnimeList);
  const isLoading = useAppSelector(selectIsAnimeListLoading);

  useEffect(() => {
    dispatch(fetchAnime());
  }, [dispatch, fetchAnime]);

  const list = animeList.map((anime, index) => {
    if (index === animeList.length - 1) {
      return <div key={anime.id} ref={setLastElement}>
        <Anime anime={anime} />
      </div>;
    }
    return <Anime anime={anime} key={anime.id} />;
  });

  const skeleton = <div className={styles['skeleton']}>
    <Skeleton variant="rectangular" width={100} height={100} />
    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
  </div>;

  return <>{list}{skeleton}</>;
};

export const AnimeList = memo(AnimeListComponent);
