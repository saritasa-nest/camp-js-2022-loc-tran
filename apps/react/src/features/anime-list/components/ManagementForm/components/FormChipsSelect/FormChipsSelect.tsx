import { CircularProgress, TextField } from '@mui/material';
import { Field } from 'formik';
import { Autocomplete, AutocompleteRenderInputParams } from 'formik-mui';
import { SyntheticEvent, useEffect, useState } from 'react';

import { AddOption } from '../AddOption/AddOption';

import styles from './FormChipsSelect.module.css';

interface Props<T> {

  /** Field labe. */
  readonly label: string;

  /** Field name. */
  readonly name: string;

  /** Options data. */
  readonly options: readonly T[];

  /** Get option name. */
  readonly getOptionName: (option: T) => string;

  /** Get new options with search key. */
  readonly fetchByKey: (value: string) => void;

  /** Is loading options or not. */
  readonly isLoading?: boolean;

  /** Add new option. */
  readonly addOption: (name: string) => void;
}

/** Delay time while search option (ms). */
const delayOnSearch = 300;

export const FormChipsSelect = <T extends object>({
  label,
  name,
  options,
  getOptionName,
  fetchByKey,
  isLoading,
  addOption,
}: Props<T>) => {
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const searchOption = setTimeout(() => fetchByKey(search), delayOnSearch);
    return () => clearTimeout(searchOption);
  }, [search]);

  const onSearchChange = (event: SyntheticEvent, value: string) => {
    setSearch(value);
  };
  const validateOption = (option: T, value: T) => getOptionName(option) === getOptionName(value);

  return (
    <Field
      className={styles['chip']}
      name={name}
      component={Autocomplete}
      options={options}
      onInputChange={onSearchChange}
      inputValue={search}
      loading={isLoading}
      loadingText={<CircularProgress />}
      noOptionsText={<AddOption optionName={search} onAddOption={addOption}/>}
      multiple
      autoSelect
      autoHighlight
      getOptionLabel={(option: T) => getOptionName(option)}
      isOptionEqualToValue={validateOption}
      renderInput={(autocompleteParams: AutocompleteRenderInputParams) => (
        <TextField {...autocompleteParams} label={label} variant="outlined" />
      )}
    />
  );
};
