import { AnimeStatus, AnimeType } from '@js-camp/core/models/anime';
import {
  AnimeManagementPost,
  RatingType,
  SeasonType,
  SourceType,
} from '@js-camp/core/models/animeManagement';
import { Genre } from '@js-camp/core/models/genre';
import { selectIsAnimeManagementLoading } from '@js-camp/react/store/animeManagement/selectors';
import { fetchGenres } from '@js-camp/react/store/genre/dispatchers';
import {
  selectAreGenresLoading,
  selectGenres,
} from '@js-camp/react/store/genre/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { Button, CircularProgress } from '@mui/material';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { TextField } from 'formik-mui';
import { FC, memo, useEffect } from 'react';

import { LoadingPage } from '../../../../shared/components/LoadingPage';

import { FormChipsSelect } from './components/FormChipsSelect';
import { FormSelect } from './components/FormSelect';
import styles from './ManagementForm.module.css';
import { initialFormValues, ManagementSchema } from './ManagementFormConfig';

const removeNullInData = (data: AnimeManagementPost): AnimeManagementPost => {
  const dataMap: Record<string, undefined> = {};
  Object.entries(data).forEach(([key, value]) => {
    if (value === null) {
      dataMap[key] = undefined;
    }
  });
  return {
    ...data,
    ...dataMap,
  };
};

interface Props {

  /** Anime management data. */
  readonly managementData?: AnimeManagementPost;

  /** Handle submit form. */
  readonly onSubmit: (data: AnimeManagementPost) => void;
}

const ManagementFormComponent: FC<Props> = ({ managementData, onSubmit }) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsAnimeManagementLoading);
  const isGenresLoading = useAppSelector(selectAreGenresLoading);

  const genres = useAppSelector(selectGenres);

  const onManagementFormSubmit = (data: AnimeManagementPost) => {
    formik.setSubmitting(false);
    onSubmit(data);
  };

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  const formik = useFormik({
    initialValues: removeNullInData(managementData ?? initialFormValues),
    validationSchema: ManagementSchema,
    onSubmit: onManagementFormSubmit,
  });

  if (isGenresLoading) {
    return <LoadingPage />;
  }

  const form = (
    <FormikProvider value={formik}>
      <Form className={styles['form']}>
        <Field
          margin="normal"
          component={TextField}
          label="Title English: "
          name="titleEnglish"
          placeholder="e.g. Conan, ..."
          type="text"
        />
        <Field
          margin="normal"
          component={TextField}
          label="Title Japanese: "
          name="titleJapanese"
          placeholder="e.g. 神秘の世, ..."
          type="text"
        />
        <Field
          margin="normal"
          component={TextField}
          label="Trailer Youtube ID: "
          name="trailerYoutube"
          placeholder="e.g. 987139, ..."
          type="text"
        />
        <FormSelect label="Type: " name="type" dataSource={AnimeType} />
        <FormSelect label="Status: " name="status" dataSource={AnimeStatus} />
        <FormSelect label="Source: " name="source" dataSource={SourceType} />
        <FormSelect label="Season: " name="season" dataSource={SeasonType} />
        <FormSelect label="Rating: " name="rating" dataSource={RatingType} />
        <FormChipsSelect
          label="Genre select"
          name="genresData"
          options={genres}
          getOptionName={(genreOption: Genre) => genreOption.name}
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          disabled={isLoading}
          sx={{ my: 3, minHeight: '50px' }}
        >
          {isLoading ? (
            <CircularProgress size={'20px'} color="inherit" />
          ) : (
            'Submit'
          )}
        </Button>
      </Form>
    </FormikProvider>
  );

  return form;
};

export const ManagementForm = memo(ManagementFormComponent);
