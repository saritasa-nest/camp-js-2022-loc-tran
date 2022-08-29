import { fetchAnime, fetchMoreAnime } from '@js-camp/react/store/anime/dispatchers';
import {
  selectAnimeList,
  selectCurrentPage,
  selectIsAnimeListLoading,
} from '@js-camp/react/store/anime/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { Skeleton } from '@mui/material';
import { FC, memo, useEffect } from 'react';

import { useInfiniteScroll } from '../../../../hooks/useInfiniteScroll';
import { Anime } from '../Anime';

import styles from './AnimeList.module.css';

const AnimeListComponent: FC = () => {
  const dispatch = useAppDispatch();
  const animeList = useAppSelector(selectAnimeList);
  const isLoading = useAppSelector(selectIsAnimeListLoading);
  const currentPage = useAppSelector(selectCurrentPage);
  const { setLastElement } = useInfiniteScroll(() => dispatch(fetchMoreAnime(currentPage + 1)));

  useEffect(() => {
    dispatch(fetchAnime());
  }, [dispatch]);

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

  return <>{list}{isLoading && skeleton}</>;
};

export const AnimeList = memo(AnimeListComponent);
