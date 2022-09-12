import { SortDirection, Sorting } from '@js-camp/core/models/anime';
import { PaginationParams } from '@js-camp/core/models/paginationParams';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FC, memo } from 'react';

import styles from './sort.module.css';

interface Props {

  /** Sorting type. */
  readonly sorting: Sorting;

  /** Sort direction. */
  readonly ordering: SortDirection;

  /** Handle field change. */
  readonly onFieldChange: (
    key: keyof PaginationParams
  ) => (value: string) => void;
}

const SortComponent: FC<Props> = ({ sorting, ordering, onFieldChange }) => {

  const handleChange = (key: keyof PaginationParams) => (event: SelectChangeEvent) => {
      const handleFieldChange = onFieldChange(key);
      handleFieldChange(event.target.value);
    };

  return (
    <div className={styles['sort']}>
      <FormControl fullWidth>
        <InputLabel id="sorting-label">Sort by: </InputLabel>
        <Select
          labelId="sorting-label"
          value={sorting}
          label="Sort by: "
          onChange={handleChange('sorting')}
        >
          {Object.entries(Sorting).map(([key, value]) => (
            <MenuItem value={value} key={key}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="ordering-label">Direction: </InputLabel>
        <Select
          labelId="ordering-label"
          value={ordering}
          label="Order by: "
          onChange={handleChange('ordering')}
        >
          {Object.entries(SortDirection).map(([key, value]) => (
            <MenuItem value={value} key={key}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export const Sort = memo(SortComponent);
