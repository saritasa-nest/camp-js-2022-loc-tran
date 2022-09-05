import { Sorting } from '@js-camp/core/models/anime';
import { PaginationParams } from '@js-camp/core/models/paginationParams';
import { SortDirection } from '@js-camp/react/store/anime/dispatchers';
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

  /** Url search params. */
  readonly queryParams: PaginationParams;

  /** Handle field change. */
  readonly onFieldChange: (
    key: keyof PaginationParams
  ) => (event: SelectChangeEvent) => void;
}

const SortComponent: FC<Props> = ({ queryParams, onFieldChange }) => (
  <div className={styles['sort']}>
    <FormControl fullWidth>
      <InputLabel id="sorting-label">Sort by: </InputLabel>
      <Select
        labelId="sorting-label"
        value={queryParams?.sorting}
        label="Sort by: "
        onChange={onFieldChange('sorting')}
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
        value={queryParams?.ordering}
        label="Order by: "
        onChange={onFieldChange('ordering')}
      >
        <MenuItem value={SortDirection.Ascending}>Ascending</MenuItem>
        <MenuItem value={SortDirection.Descending}>Descending</MenuItem>
      </Select>
    </FormControl>
  </div>
);

export const Sort = memo(SortComponent);
