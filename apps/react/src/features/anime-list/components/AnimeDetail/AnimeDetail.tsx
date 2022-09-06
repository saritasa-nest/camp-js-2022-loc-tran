import { fetchAnimeDetail } from '@js-camp/react/store/animeDetail/dispatchers';
import {
  selectAnimeDetail,
  selectIsAnimeDetailLoading,
} from '@js-camp/react/store/animeDetail/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { Button, Modal } from '@mui/material';
import { FC, memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './AnimeDetail.module.css';
import { DetailInfo } from './components/DetailInfo/DetailInfo';
import { DetailSkeleton } from './components/DetailSkeleton/DetailSkeleton';

const AnimeDetailComponent: FC = () => {
  const params = useParams();

  const animeIdParams = params['animeId'];
  if (
    animeIdParams === undefined ||
    isNaN(Number.parseInt(animeIdParams, 10))
  ) {
    throw new Error('Invalid anime id!');
  }
  const animeId = Number.parseInt(animeIdParams, 10);

  const [posterOpen, setPosterOpen] = useState(false);
  const [trailerOpen, setTrailerOpen] = useState(false);
  const dispatch = useAppDispatch();
  const animeDetail = useAppSelector(state =>
    selectAnimeDetail(state, animeId));
  const isLoading = useAppSelector(selectIsAnimeDetailLoading);

  useEffect(() => {
    dispatch(fetchAnimeDetail(animeId));
  }, [dispatch, animeId]);

  if (isLoading) {
    return <DetailSkeleton />;
  }

  if (animeDetail === undefined) {
    return <h1>No anime with given id</h1>;
  }

  return (
    <div className={styles['detail']}>
      <div className={styles['detail__media']}>
        <div className={styles['detail__poster']}>
          <img
            onClick={() => setPosterOpen(true)}
            className={styles['detail__image']}
            alt="Anime poster"
            src={animeDetail?.image}
          />
        </div>
        <Button
          onClick={() => setTrailerOpen(true)}
          className={styles['detail__trailer']}
          type="button"
          variant="contained"
          color="info"
        >
          Watch trailer!
        </Button>
      </div>
      <DetailInfo detail={animeDetail} />
      <Modal
        className={styles['detail__modal']}
        open={posterOpen}
        onClose={() => setPosterOpen(false)}
      >
        <img
          className={styles['detail__popup']}
          alt="Anime poster"
          src={animeDetail?.image}
        />
      </Modal>
      <Modal
        className={styles['detail__modal']}
        open={trailerOpen}
        onClose={() => setTrailerOpen(false)}
      >
        {animeDetail?.trailerYoutube ? (
          <iframe
            className={styles['detail__video']}
            src={`https://www.youtube.com/embed/${animeDetail?.trailerYoutube}`}
          />
        ) : (
          <div className={styles['detail__note']}>Trailer not found!</div>
        )}
      </Modal>
    </div>
  );
};

export const AnimeDetail = memo(AnimeDetailComponent);
