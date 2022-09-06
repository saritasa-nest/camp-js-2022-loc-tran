import { Skeleton } from '@mui/material';
import { FC, memo } from 'react';

import styles from './DetailSkeleton.module.css';

const DetailSkeletonComponent: FC = () => (
  <div className={styles['detail']}>
    <div className={styles['detail__media']}>
      <div className={styles['detail__poster']}>
        <Skeleton
          className={styles['detail__image']}
          variant='rectangular'
        />
      </div>
      <Skeleton
        className={styles['detail__trailer']}
        variant='rectangular'
      />
    </div>
    <div className={styles['detail__info']}>
      <label className={styles['detail__label']}>
        <Skeleton variant='text' className={styles['detail__text']} />
        <Skeleton variant='text' className={styles['detail__text']} />
        <Skeleton variant='text' className={styles['detail__text']} />
        <Skeleton variant='text' className={styles['detail__text']} />
        <Skeleton variant='text' className={styles['detail__text']} />
        <Skeleton variant='text' className={styles['detail__text']} />
        <Skeleton variant='text' className={styles['detail__text']} />

      </label>
    </div>
  </div>
);

export const DetailSkeleton = memo(DetailSkeletonComponent);
