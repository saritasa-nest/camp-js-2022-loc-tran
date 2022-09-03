import { Box, Skeleton } from '@mui/material';
import { FC, memo } from 'react';

import styles from './AnimeSkeleton.module.css';

const AnimeSkeletonComponent: FC = () => (
  <Box className={styles['skeleton']}>
    <Skeleton className={styles['skeleton__avatar']} variant="rectangular" />
    <div className={styles['skeleton__info']}>
      <Skeleton className={`${styles['skeleton__text']} ${styles['skeleton__text--primary']}`} variant="text" />
      <Skeleton className={`${styles['skeleton__text']} ${styles['skeleton__text--primary']}`} variant="text" />
      <Skeleton className={`${styles['skeleton__text']} ${styles['skeleton__text--secondary']}`} variant="text" />
      <Skeleton className={`${styles['skeleton__text']} ${styles['skeleton__text--secondary']}`} variant="text" />
    </div>
  </Box>
);

export const AnimeSkeleton = memo(AnimeSkeletonComponent);
