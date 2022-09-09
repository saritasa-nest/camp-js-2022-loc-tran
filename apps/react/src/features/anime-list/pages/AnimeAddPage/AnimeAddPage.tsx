import { AnimeManagement, AnimeManagementPost } from '@js-camp/core/models/animeManagement';
import { addAnime } from '@js-camp/react/store/anime/dispatchers';
import { useAppDispatch } from '@js-camp/react/store/store';
import { FC, memo } from 'react';

import { HOME_PAGE } from '../../../../routes/paths';
import { useAppNavigate } from '../../../../hooks/useAppNavigate';
import { ManagementForm } from '../../components/ManagementForm';

import styles from './AnimeAddPage.module.css';

const AnimeAddPageComponent: FC = () => {
  const dispatch = useAppDispatch();
  const { navigateWithSearchParams } = useAppNavigate();

  const onAddFormSubmit = (data: AnimeManagementPost) => {
    dispatch(addAnime(data)).then(result => {
      if (result.payload instanceof AnimeManagement) {
        navigateWithSearchParams(`/anime/${result.payload.id}`);
      } else {
        navigateWithSearchParams(HOME_PAGE);
      }
    });
  };

  return (
    <>
      <h1 className={styles['title']}>Add new Anime</h1>
      <ManagementForm onSubmit={onAddFormSubmit}/>
    </>
  );
};

export const AnimeAddPage = memo(AnimeAddPageComponent);
