import { AnimeType } from '@js-camp/core/models/anime';
import { SelectChangeEvent, FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { FC, memo } from 'react';

/** Separator between selection string. */
export const typeSelectSeparator = ',';

interface Props {

  /** Type param. */
  readonly type: string;

  /** Handle type change. */
  readonly handleTypeChange: (value: readonly AnimeType[]) => void;
}

const TypeComponent: FC<Props> = ({ type, handleTypeChange }) => {

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const { value } = event.target;
    handleTypeChange((typeof value === 'string' ? [value] : value) as AnimeType[]);
  };

  return <FormControl fullWidth>
    <InputLabel id="type-label">Type: </InputLabel>
    <Select
      labelId="type-label"
      multiple
      value={type.split(typeSelectSeparator) ?? []}
      label="Type: "
      onChange={handleChange}
    >
      {Object.entries(AnimeType).map(([key, value]) => (
        <MenuItem value={value} key={value}>
          {key}
        </MenuItem>
      ))}
    </Select>
  </FormControl>;
};

export const Type = memo(TypeComponent);
