import { AnimeStatus, AnimeType } from '@js-camp/core/models/anime';
import {
  RatingType,
  SeasonType,
  SourceType,
} from '@js-camp/core/models/animeManagement';
import { MenuItem } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { FC, memo } from 'react';

import styles from './FormSelect.module.css';

type FormEnum =
  | typeof AnimeStatus
  | typeof RatingType
  | typeof SeasonType
  | typeof AnimeType
  | typeof SourceType;

interface Props {

  /** Name of field. */
  readonly name: string;

  /** Label of field. */
  readonly label: string;

  /** Menu item source. */
  readonly dataSource: FormEnum;
}

const FormSelectComponent: FC<Props> = ({ name, label, dataSource }) => (
  <Field className={styles['select']} component={TextField} select name={name} label={label}>
    {Object.entries(dataSource).map(([key, value]) => (
      <MenuItem key={key} value={value}>{key}</MenuItem>
    ))}
  </Field>
);

export const FormSelect = memo(FormSelectComponent);
