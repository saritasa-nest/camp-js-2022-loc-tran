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
    <div className={styles['detail__label']}>
      <span className={styles['detail__title']}>English title: </span>
      <span className={styles['detail__text']}>
        {getPlaceholder(detail?.titleEnglish)}
      </span>
    </div>
    <div className={styles['detail__label']}>
      <span className={styles['detail__title']}>Japanese title: </span>
      <span className={styles['detail__text']}>
        {getPlaceholder(detail?.titleJapanese)}
      </span>
    </div>
    <div className={styles['detail__label']}>
      <span className={styles['detail__title']}>Type: </span>
      <span className={styles['detail__text']}>{detail?.type}</span>
    </div>
    <div className={styles['detail__label']}>
      <span className={styles['detail__title']}>Status: </span>
      <span className={styles['detail__text']}>{detail?.status}</span>
    </div>
    <div className={styles['detail__label']}>
      <span className={styles['detail__title']}>Airing: </span>
      <span className={styles['detail__text']}>
        {detail?.airing ? 'Yes' : 'No'}
      </span>
    </div>
    <div className={styles['detail__label']}>
      <span className={styles['detail__title']}>Aired start date: </span>
      <span className={styles['detail__text']}>
        {getPlaceholder(detail?.aired?.start?.toLocaleString())}
      </span>
    </div>
    <div className={styles['detail__label']}>
      <span className={styles['detail__title']}>Aired end date: </span>
      <span className={styles['detail__text']}>
        (getPlaceholder{detail?.aired?.end.toLocaleString()}
      </span>
    </div>
    <div className={styles['detail__label']}>
      <span className={styles['detail__title']}>Synopsis: </span>
      <span className={styles['detail__text']}>
        {detail?.synopsis}
      </span>
    </div>
    <div className={styles['detail__label']}>
      <span className={styles['detail__title']}>Genres: </span>
      <span className={styles['detail__text']}>
        {detail?.genresData.map(genre => (
          <Chip key={genre.id} color='primary' label={genre.name} />
        ))}
      </span>
    </div>
    <div className={styles['detail__label']}>
      <span className={styles['detail__title']}>Studios: </span>
      <span className={styles['detail__text']}>
        {detail?.studiosData.map(studio => (
          <Chip key={studio.id} color='primary' label={studio.name} />
        ))}
      </span>
    </div>
  </div>
</>;

export const DetailInfo = memo(DetailInfoComponent);
