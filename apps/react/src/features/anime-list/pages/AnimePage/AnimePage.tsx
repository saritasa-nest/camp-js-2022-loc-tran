import { Grid } from '@mui/material';
import { FC, memo } from 'react';

import { AnimeList } from '../../components/AnimeList';

import styles from './AnimePage.module.css';

const AnimePageComponent: FC = () => (
  <Grid container className={styles['anime']}>
    <Grid lg={3} sm={5} item className={styles['anime__list']}>
      <AnimeList />
    </Grid>
    <Grid lg={9} sm={7} item className={styles['anime__detail']}>
    </Grid>
  </Grid>
);

export const AnimePage = memo(AnimePageComponent);
