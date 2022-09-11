import { FC, memo, useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { Field } from 'formik';

import styles from './FormDateSelect.module.css';

interface Props {

  /** Initial value. */
  readonly initialValue: Date | null;

  /** Label name. */
  readonly label: string;

  /** Field name. */
  readonly name: string;

  /** Field error. */
  readonly error?: string;

  /** Handle date change. */
  readonly onDateChange: (date: Date) => void;
}

const FormDateSelectComponent: FC<Props> = ({
  onDateChange,
  initialValue,
  name,
  label,
  error,
}) => {
  const [value, setValue] = useState<Date | null>(initialValue);

  const handleDateChange = (newValue: Date | null) => {
    setValue(newValue);
    if (newValue !== null) {
      onDateChange(newValue);
    }
  };
  return (
    <Field
      name={name}
      component={LocalizationProvider}
      dateAdapter={AdapterDayjs}
    >
      <DatePicker
        className={styles['date']}
        disableFuture
        label={label}
        openTo="year"
        views={['year', 'month', 'day']}
        value={value}
        onChange={handleDateChange}
        renderInput={params => (
          <TextField
            {...params}
            FormHelperTextProps={{ className: styles['date__error'] }}
            helperText={error}
          />
        )}
      />
    </Field>
  );
};

export const FormDateSelect = memo(FormDateSelectComponent);
