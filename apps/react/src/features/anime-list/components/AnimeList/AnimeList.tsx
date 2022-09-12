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

const NUMBER_OF_SKELETONS = 10;

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

  /** I used index as a key here because component skeleton does'nt have identifier values .
   * and they are not computed and do not change. */
  const skeleton = Array.from(new Array(NUMBER_OF_SKELETONS)).map(
    (value, index) => <AnimeSkeleton key={index} />,
  );

  let listPlaceholder;
  if (animeList.length === 0) {
    listPlaceholder = isLoading ? skeleton : 'No anime found!';
  }

  return (
    <>
      {listPlaceholder}
      {list}
      {isLoading && <AnimeSkeleton />}
    </>
  );
};

export const AnimeList = memo(AnimeListComponent);
