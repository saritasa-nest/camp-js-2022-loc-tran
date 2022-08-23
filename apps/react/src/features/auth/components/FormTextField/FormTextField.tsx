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
      variant="standard"
      label={label}
      helperText={meta.error}
      {...field}
      {...props}
      error={meta.touched && !!meta.error}
    />
  );
};

export const FormTextField = memo(FormTextFieldComponent);
