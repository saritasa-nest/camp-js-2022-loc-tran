import { AnimeType } from '@js-camp/core/models/anime';
import { PaginationParams } from '@js-camp/core/models/paginationParams';
import { SelectChangeEvent, FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { FC, memo } from 'react';

/** Separator between selection string. */
export const typeSelectSeparator = ',';

interface Props {

  /** Url search params. */
  readonly queryParams: PaginationParams;

  /** Handle type change. */
  readonly handleTypeChange: (event: SelectChangeEvent<string[]>) => void;
}

const TypeComponent: FC<Props> = ({ queryParams, handleTypeChange }) => <FormControl fullWidth>
  <InputLabel id="type-label">Type: </InputLabel>
  <Select
    labelId="type-label"
    multiple
    value={queryParams?.type?.split(typeSelectSeparator) ?? []}
    label="Type: "
    onChange={handleTypeChange}
  >
    {Object.entries(AnimeType).map(([key, value]) => (
      <MenuItem value={value} key={value}>
        {key}
      </MenuItem>
    ))}
  </Select>
</FormControl>;

export const Type = memo(TypeComponent);
