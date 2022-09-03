import {
  fetchAnime,
  fetchMoreAnime,
} from '@js-camp/react/store/anime/dispatchers';
import {
  selectAnimeList,
  selectIsAnimeListLoading,
} from '@js-camp/react/store/anime/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { FC, memo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useInfiniteScroll } from '../../../../hooks/useInfiniteScroll';
import { Anime } from '../Anime';
import { AnimeSkeleton } from '../Anime/AnimeSkeleton';

const AnimeListComponent: FC = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const animeList = useAppSelector(selectAnimeList);
  const isLoading = useAppSelector(selectIsAnimeListLoading);
  const { setLastElement } = useInfiniteScroll(() =>
    dispatch(fetchMoreAnime()));

  useEffect(() => {
    dispatch(fetchAnime(searchParams));
  }, [dispatch, searchParams]);

  const list = animeList.map((anime, index) => {
    if (index === animeList.length - 1) {
      return (
        <div key={anime.id} ref={setLastElement}>
          <Anime anime={anime} />
        </div>
      );
    }
    return <Anime anime={anime} key={anime.id} />;
  });

  const skeleton = (
    <>
      <AnimeSkeleton />
      <AnimeSkeleton />
      <AnimeSkeleton />
      <AnimeSkeleton />
      <AnimeSkeleton />
      <AnimeSkeleton />
    </>
  );

  return (
    <>
      {list.length > 0 ? list : skeleton}
      {isLoading && <AnimeSkeleton />}
    </>
  );
};

export const AnimeList = memo(AnimeListComponent);
