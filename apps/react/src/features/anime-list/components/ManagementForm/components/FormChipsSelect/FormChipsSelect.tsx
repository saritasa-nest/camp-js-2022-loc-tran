import { TextField } from '@mui/material';
import { Field } from 'formik';
import { Autocomplete, AutocompleteRenderInputParams } from 'formik-mui';

interface Props<T> {

  /** Field labe. */
  readonly label: string;

  /** Field name. */
  readonly name: string;

  /** Options data. */
  readonly options: readonly T[];

  /** Get option name. */
  readonly getOptionName: (option: T) => string;
}

export const FormChipsSelect = <T extends object>({ label, name, options, getOptionName }: Props<T>) => (
  <Field
    name={name}
    component={Autocomplete}
    options={options}
    multiple
    getOptionLabel={(option: T) => getOptionName(option)}
    isOptionEqualToValue={(option: T, value: T) => getOptionName(option) === getOptionName(value)}
    renderInput={(autocompleteParams: AutocompleteRenderInputParams) => (
      <TextField
        {...autocompleteParams}
        label={label}
        variant="outlined"
      />
    )}
  />
);
