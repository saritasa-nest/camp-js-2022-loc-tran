import { Grid } from '@mui/material';
import { FC, memo } from 'react';

import { AnimeList } from '../../components/AnimeList';

import styles from './AnimePage.module.css';

const AnimePageComponent: FC = () => (
  <Grid container className={styles['anime']}>
    <Grid xs={3} item className={styles['anime__list']}>
      <AnimeList />
    </Grid>
    <Grid xs={9} item className={styles['anime__detail']}>
      <span>Detail area (not implemented yet)</span>
    </Grid>
  </Grid>
);

export const AnimePage = memo(AnimePageComponent);
