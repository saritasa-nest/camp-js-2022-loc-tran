import { FormControl, TextField } from '@mui/material';
import { ChangeEvent, FC, memo } from 'react';

/** Search props. */
interface Props {

  /** Search string. */
  readonly search: string;

  /** Handle search change. */
  readonly onChange: (searchKey: string) => void;
}

const SearchComponent: FC<Props> = ({ search, onChange }) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <TextField
        label="Search: "
        placeholder="E.g. Conan, Dragon, ..."
        value={search}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export const Search = memo(SearchComponent);
