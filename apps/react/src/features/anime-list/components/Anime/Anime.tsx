import { Anime as AnimeData } from '@js-camp/core/models/anime';
import { Avatar, List, ListItem, ListItemAvatar } from '@mui/material';
import { FC, memo } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

import { getPlaceholder } from '../../../../utils/utils';

import styles from './Anime.module.css';
interface Props {

  /** Anime data. */
  readonly anime: AnimeData;
}

const AnimeComponent: FC<Props> = ({ anime }) => {
  const [searchParams] = useSearchParams();
  return (
    <NavLink
      to={`${anime.id}?${searchParams.toString()}`}
      className={({ isActive }) =>
        `${isActive ? styles['info--active'] : ''} ${styles['info']}`
      }
    >
      <List className={styles['info__list']}>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              className={styles['info__avatar']}
              variant="rounded"
              alt=""
              src={anime.image}
            />
          </ListItemAvatar>
          <div className={styles['info__data']}>
            <span className={styles['info__data--primary']}>
              Title English: {getPlaceholder(anime.titleEnglish)}
            </span>
            <span className={styles['info__data--primary']}>
              Title Japanese: {getPlaceholder(anime.titleJapanese)}
            </span>
            <span className={styles['info__data--secondary']}>
              Type: {anime.type}
            </span>
            <span className={styles['info__data--secondary']}>
              Status: {anime.status}
            </span>
          </div>
        </ListItem>
      </List>
    </NavLink>
  );
};

export const Anime = memo(AnimeComponent);
