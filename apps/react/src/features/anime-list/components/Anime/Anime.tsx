import { Anime as AnimeData } from '@js-camp/core/models/anime';
import {
  Avatar,
  Box,
  Button,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  Modal,
} from '@mui/material';
import { FC, memo, MouseEvent, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { Delete, Edit } from '@mui/icons-material';
import { deleteAnime } from '@js-camp/react/store/anime/dispatchers';
import { useAppDispatch } from '@js-camp/react/store/store';

import { getPlaceholder } from '../../../../utils/utils';

import styles from './Anime.module.css';
interface Props {

  /** Anime data. */
  readonly anime: AnimeData;
}

const AnimeComponent: FC<Props> = ({ anime }) => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const [openDelete, setOpenDelete] = useState(false);

  const handleDeleteAnime = (event: MouseEvent) => {
    event.preventDefault();
    setOpenDelete(true);
  };
  const onDeleteAnime = () => {
    setOpenDelete(false);
    dispatch(deleteAnime(anime.id));
  };

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
          <div className={styles['info__action']}>
            <Fab size="small" color="primary">
              <Edit />
            </Fab>
            <Fab size="small" color="error" onClick={handleDeleteAnime}>
              <Delete />
            </Fab>
          </div>
        </ListItem>
      </List>
      <Modal
        className={styles['info__modal']}
        open={openDelete}
        onClose={() => setOpenDelete(false)}
      >
        <Box className={styles['info__popup']}>
          <h1>Delete anime</h1>
          <div className={styles['info__warning']}>
            Are you sure? You cannot undo this action.
          </div>
          <div className={styles['info__action']}>
            <Button className={styles['info__button']} color="secondary" onClick={() => setOpenDelete(false)}>
              Cancel
            </Button>
            <Button
              className={styles['info__button']}
              variant="contained"
              color="error"
              onClick={onDeleteAnime}
            >
              Ok
            </Button>
          </div>
        </Box>
      </Modal>
    </NavLink>
  );
};

export const Anime = memo(AnimeComponent);
