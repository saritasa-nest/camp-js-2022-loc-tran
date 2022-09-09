import { AnimeStatus, AnimeType } from '@js-camp/core/models/anime';
import {
  AnimeManagementPost,
  RatingType,
  SeasonType,
  SourceType,
} from '@js-camp/core/models/animeManagement';
import { postAnimePoster } from '@js-camp/react/store/anime/dispatchers';
import { selectIsEditingAnime } from '@js-camp/react/store/anime/selectors';
import { selectIsPostingPoster } from '@js-camp/react/store/animeDetail/selectors';
import {
  fetchGenres,
} from '@js-camp/react/store/genre/dispatchers';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { Button, CircularProgress } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { FC, memo, useEffect, useState } from 'react';

import { ChipsEditor } from './components/ChipsEditor/ChipsEditor';

import { FormDateSelect } from './components/FormDateSelect';
import { FormInputGroup } from './components/FormInputGroup';
import { FormSelect } from './components/FormSelect';
import { FormSynopsis } from './components/FormSynopsis/FormSynopsis';
import { ImageSelect } from './components/ImageSelect/ImageSelect';
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
  const [poster, setPoster] = useState<File>();

  const isPostingPoster = useAppSelector(selectIsPostingPoster);
  const isLoading = useAppSelector(selectIsEditingAnime);
  const { enqueueSnackbar } = useSnackbar();

  const onManagementFormSubmit = (data: AnimeManagementPost) => {
    formik.setSubmitting(false);
    if (poster) {
      dispatch(postAnimePoster(poster)).then(result => {
        if (typeof result.payload === 'string') {
          onSubmit({
            ...data,
            image: result.payload,
          });
        }
      });
    } else if (managementData?.image) {
      onSubmit(data);
    } else {
      enqueueSnackbar('Image is required!', { variant: 'error' });
    }
  };

  const formik = useFormik({
    initialValues: removeNullInData(managementData ?? initialFormValues),
    validationSchema: ManagementSchema,
    onSubmit: onManagementFormSubmit,
  });

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  const handleStartDateChange = (date: Date) => {
    formik.setFieldValue('aired.start', date);
  };
  const handleEndDateChange = (date: Date) => {
    formik.setFieldValue('aired.end', date);
  };
  const handlePosterChange = (animePoster: File) => setPoster(animePoster);

  return (
    <FormikProvider value={formik}>
      <Form className={styles['form']}>
        <div className={styles['form__poster']}>
          <ImageSelect
            initialImage={managementData?.image}
            onChange={handlePosterChange}
          />
        </div>
        <div className={styles['form__inputs']}>
          <FormInputGroup />
          <FormSelect label="Type: " name="type" dataSource={AnimeType} />
          <FormSelect label="Status: " name="status" dataSource={AnimeStatus} />
          <FormSelect label="Source: " name="source" dataSource={SourceType} />
          <FormSelect label="Season: " name="season" dataSource={SeasonType} />
          <FormSelect label="Rating: " name="rating" dataSource={RatingType} />
          <FormDateSelect
            name="aired.start"
            label="Aired start"
            initialValue={
              formik.getFieldMeta('aired.start').value ?
                new Date(formik.getFieldMeta('aired.start').value) :
                null
            }
            handleDateChange={handleStartDateChange}
          />
          <FormDateSelect
            name="aired.end"
            label="Aired end"
            initialValue={
              formik.getFieldMeta('aired.end').value ?
                new Date(formik.getFieldMeta('aired.end').value) :
                null
            }
            handleDateChange={handleEndDateChange}
            error={formik.errors.aired?.end}
          />
          <ChipsEditor />
          <FormSynopsis />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="success"
          disabled={isLoading || isPostingPoster}
        >
          {isLoading || isPostingPoster ? <CircularProgress /> : 'Submit'}
        </Button>
      </Form>
    </FormikProvider>
  );
};

export const ManagementForm = memo(ManagementFormComponent);
