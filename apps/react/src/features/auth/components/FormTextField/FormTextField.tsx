import { FC, memo } from 'react';
import { useField } from 'formik';
import TextField from '@mui/material/TextField';

interface Props {

  /** Label of text field. */
  readonly label: string;

  /** Name of text field. */
  readonly name: string;

  [key: string]: string;
}

/** Text field component for form. */
const FormTextFieldComponent: FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      {...field}
      {...props}
      variant="outlined"
      label={label}
      helperText={meta.touched && meta.error}
      error={meta.touched && !!meta.error}
    />
  );
};

export const FormTextField = memo(FormTextFieldComponent);
