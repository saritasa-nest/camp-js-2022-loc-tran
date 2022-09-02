import { Anime as AnimeData } from '@js-camp/core/models/anime';
import { Avatar, List, ListItem, ListItemAvatar } from '@mui/material';
import { FC, memo } from 'react';

import styles from './Anime.module.css';

const placeholder = (text: string): string => text ? text : 'Empty';

interface Props {

  /** Anime data. */
  readonly anime: AnimeData;
}

const AnimeComponent: FC<Props> = ({ anime }) => (
  <List className={styles['info']}>
    <ListItem>
      <ListItemAvatar>
        <Avatar className={styles['info__avatar']} variant="rounded" alt="" src={anime.image} />
      </ListItemAvatar>
      <div className={styles['info__data']}>
        <span className={styles['info__data--primary']}>Title English: {placeholder(anime.titleEnglish)}</span>
        <span className={styles['info__data--primary']}>Title Japanese: {placeholder(anime.titleJapanese)}</span>
        <span className={styles['info__data--secondary']}>Type: {anime.type}</span>
        <span className={styles['info__data--secondary']}>Status: {anime.status}</span>
      </div>
    </ListItem>
  </List>
);

export const Anime = memo(AnimeComponent);
