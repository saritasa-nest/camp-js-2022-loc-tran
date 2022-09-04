import { fetchAnime } from '@js-camp/react/store/anime/dispatchers';
import {
  selectAnimeList,
  selectIsAnimeListLoading,
} from '@js-camp/react/store/anime/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { FC, memo, useEffect } from 'react';

import { Anime } from '../Anime';
import { AnimeSkeleton } from '../Anime/AnimeSkeleton';

const AnimeListComponent: FC = () => {
  const dispatch = useAppDispatch();
  const animeList = useAppSelector(selectAnimeList);
  const isLoading = useAppSelector(selectIsAnimeListLoading);

  useEffect(() => {
    dispatch(fetchAnime());
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <AnimeSkeleton />
        <AnimeSkeleton />
        <AnimeSkeleton />
        <AnimeSkeleton />
        <AnimeSkeleton />
        <AnimeSkeleton />
      </>
    );
  }

  const list = animeList.map(anime => <Anime anime={anime} key={anime.id} />);

  return <>{list}</>;
};

export const AnimeList = memo(AnimeListComponent);
