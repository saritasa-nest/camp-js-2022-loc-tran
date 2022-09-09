import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { FC, memo } from 'react';

import styles from './FormSynopsis.module.css';

const FormSynopsisComponent: FC = () => (
  <Field
    className={styles['form__synopsis']}
    component={TextField}
    placeholder="e.g. Some contents, ..."
    label="Synopsis"
    type="text"
    name="synopsis"
    multiline
    maxRows={4}
  />
);

export const FormSynopsis = memo(FormSynopsisComponent);
