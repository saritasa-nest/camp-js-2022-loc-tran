import { FC, memo } from 'react';
import { AnimeDetail } from '@js-camp/core/models/animeDetail';
import { Chip } from '@mui/material';

import { getPlaceholder } from '../../../../../../utils/utils';

import styles from './DetailInfo.module.css';

interface Props {

  /** Anime detail data. */
  readonly detail?: AnimeDetail;
}

const DetailInfoComponent: FC<Props> = ({ detail }) => <>
  <div className={styles['detail__info']}>
    <label className={styles['detail__label']}>
      <span className={styles['detail__title']}>English title: </span>
      <span className={styles['detail__text']}>
        {getPlaceholder(detail?.titleEnglish)}
      </span>
    </label>
    <label className={styles['detail__label']}>
      <span className={styles['detail__title']}>Japanese title: </span>
      <span className={styles['detail__text']}>
        {getPlaceholder(detail?.titleJapanese)}
      </span>
    </label>
    <label className={styles['detail__label']}>
      <span className={styles['detail__title']}>Type: </span>
      <span className={styles['detail__text']}>{detail?.type}</span>
    </label>
    <label className={styles['detail__label']}>
      <span className={styles['detail__title']}>Status: </span>
      <span className={styles['detail__text']}>{detail?.status}</span>
    </label>
    <label className={styles['detail__label']}>
      <span className={styles['detail__title']}>Airing: </span>
      <span className={styles['detail__text']}>
        {detail?.airing ? 'Yes' : 'No'}
      </span>
    </label>
    <label className={styles['detail__label']}>
      <span className={styles['detail__title']}>Aired start date: </span>
      <span className={styles['detail__text']}>
        {detail?.aired?.start.toLocaleString()}
      </span>
    </label>
    <label className={styles['detail__label']}>
      <span className={styles['detail__title']}>Aired end date: </span>
      <span className={styles['detail__text']}>
        {detail?.aired?.end.toLocaleString()}
      </span>
    </label>
    <label className={styles['detail__label']}>
      <span className={styles['detail__title']}>Synopsis: </span>
      <span className={styles['detail__text']}>
        {detail?.synopsis}
      </span>
    </label>
    <label className={styles['detail__label']}>
      <span className={styles['detail__title']}>Genres: </span>
      <span className={styles['detail__text']}>
        {detail?.genresData.map(genre => (
          <Chip key={genre.id} color='primary' label={genre.name} />
        ))}
      </span>
    </label>
  </div>
</>;

export const DetailInfo = memo(DetailInfoComponent);
