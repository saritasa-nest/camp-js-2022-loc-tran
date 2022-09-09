import { FC, memo, useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { Field } from 'formik';

import styles from './FormDateSelect.module.css';

interface Props {

  /** Initial value. */
  readonly initialValue: Date;

  /** Label name. */
  readonly label: string;

  /** Field name. */
  readonly name: string;

  /** Handle date change. */
  readonly handleDateChange: (date: Date) => void;
}

const FormDateSelectComponent: FC<Props> = ({
  handleDateChange,
  initialValue,
  name,
  label,
}) => {
  const [value, setValue] = useState<Date | null>(initialValue);

  const onDateChange = (newValue: Date | null) => {
    setValue(newValue);
    if (newValue !== null) {
      handleDateChange(newValue);
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
        onChange={onDateChange}
        renderInput={params => <TextField {...params} />}
      />
    </Field>
  );
};

export const FormDateSelect = memo(FormDateSelectComponent);
