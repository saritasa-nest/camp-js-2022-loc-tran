import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { FC, memo } from 'react';

import styles from './FormInputGroup.module.css';

const FormInputGroupComponent: FC = () => (
  <>
    <Field
      className={styles['input']}
      component={TextField}
      label="Title English: "
      name="titleEnglish"
      placeholder="e.g. Conan, ..."
      type="text"
    />
    <Field
      className={styles['input']}
      component={TextField}
      label="Title Japanese: "
      name="titleJapanese"
      placeholder="e.g. 神秘の世, ..."
      type="text"
    />
    <Field
      className={styles['input']}
      component={TextField}
      label="Trailer Youtube ID: "
      name="trailerYoutube"
      placeholder="e.g. 987139, ..."
      type="text"
    />
  </>
);

export const FormInputGroup = memo(FormInputGroupComponent);
