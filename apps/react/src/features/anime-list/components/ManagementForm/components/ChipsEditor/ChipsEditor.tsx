import { Genre } from '@js-camp/core/models/genre';
import { Studio } from '@js-camp/core/models/studio';
import { fetchGenresByKey, addNewGenre } from '@js-camp/react/store/genre/dispatchers';
import { FC, memo } from 'react';
import { selectGenres, selectAreGenresLoading } from '@js-camp/react/store/genre/selectors';
import { fetchStudiosByKey, addNewStudio } from '@js-camp/react/store/studio/dispatchers';
import { selectStudios, selectAreStudiosLoading } from '@js-camp/react/store/studio/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';

import { FormChipsSelect } from '../FormChipsSelect';

const ChipsEditorComponent: FC = () => {
  const genres = useAppSelector(selectGenres);
  const studios = useAppSelector(selectStudios);
  const isGenresLoading = useAppSelector(selectAreGenresLoading);
  const isStudiosLoading = useAppSelector(selectAreStudiosLoading);
  const dispatch = useAppDispatch();
  const fetchGenreByKey = (key: string) => {
    dispatch(fetchGenresByKey(key));
  };
  const addGenre = (name: string) => {
    dispatch(addNewGenre({ name }));
  };
  const fetchStudioByKey = (key: string) => {
    dispatch(fetchStudiosByKey(key));
  };
  const addStudio = (name: string) => {
    dispatch(addNewStudio({ name }));
  };

  return (
    <>
      <FormChipsSelect
        label="Genre select"
        name="genresData"
        options={genres}
        getOptionName={(genreOption: Genre) => genreOption.name}
        isLoading={isGenresLoading}
        fetchByKey={fetchGenreByKey}
        addOption={addGenre}
      />
      <FormChipsSelect
        label="Studio select"
        name="studiosData"
        options={studios}
        getOptionName={(studioOption: Studio) => studioOption.name}
        isLoading={isStudiosLoading}
        fetchByKey={fetchStudioByKey}
        addOption={addStudio}
      />
    </>
  );
};

export const ChipsEditor = memo(ChipsEditorComponent);
