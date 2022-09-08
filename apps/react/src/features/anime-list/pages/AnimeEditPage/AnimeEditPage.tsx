import { AnimeManagement, AnimeManagementPost } from '@js-camp/core/models/animeManagement';
import { editAnime, getAnimeManagement } from '@js-camp/react/store/animeManagement/dispatchers';
import { selectAnimeManagement, selectIsAnimeManagementLoading } from '@js-camp/react/store/animeManagement/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { FC, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { LoadingPage } from '../../../../shared/components/LoadingPage';
import { ManagementForm } from '../../components/ManagementForm';

const AnimeEditPageComponent: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsAnimeManagementLoading);

  const animeIdParams = params['animeId'];
  if (
    animeIdParams === undefined ||
    isNaN(Number.parseInt(animeIdParams, 10))
  ) {
    throw new Error('Invalid anime id!');
  }
  const animeId = Number.parseInt(animeIdParams, 10);

  const managementData = useAppSelector(state =>
    selectAnimeManagement(state, animeId));

  useEffect(() => {
    dispatch(getAnimeManagement(animeId));
  }, [animeId]);

  const onEditFormSubmit = (data: AnimeManagementPost) => {
    console.log(data);
    dispatch(editAnime(new AnimeManagement({
      id: animeId,
      ...data,
    })));
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <ManagementForm
      managementData={managementData}
      onSubmit={onEditFormSubmit}
    />
  );
};

export const AnimeEditPage = memo(AnimeEditPageComponent);
