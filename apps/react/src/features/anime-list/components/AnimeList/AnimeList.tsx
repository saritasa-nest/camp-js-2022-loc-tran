import { fetchAnime } from '@js-camp/react/store/anime/dispatchers';
import {
  selectAnimeList,
  selectIsAnimeListLoading,
} from '@js-camp/react/store/anime/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import { FC, memo, useEffect } from 'react';

const AnimeListComponent: FC = () => {
  const dispatch = useAppDispatch();
  const animeList = useAppSelector(selectAnimeList);
  const isLoading = useAppSelector(selectIsAnimeListLoading);

  useEffect(() => {
    dispatch(fetchAnime());
  }, [dispatch, fetchAnime]);

  const list = animeList.map(anime => (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} key={anime.id}>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={anime.image} />
        </ListItemAvatar>
        <ListItemText primary={anime.id} secondary="Jan 9, 2014" />
      </ListItem>
    </List>
  ));

  return <>{list}</>;
};

export const AnimeList = memo(AnimeListComponent);
