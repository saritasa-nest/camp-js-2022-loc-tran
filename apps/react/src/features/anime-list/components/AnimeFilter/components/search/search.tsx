import { PaginationParams } from '@js-camp/core/models/paginationParams';
import { FormControl, TextField } from '@mui/material';
import { ChangeEvent, FC, memo } from 'react';

/** Search props. */
interface Props {

  /** Url search params. */
  readonly queryParams: PaginationParams;

  /** Handle search change. */
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchComponent: FC<Props> = ({ queryParams, onChange }) => (
  <FormControl fullWidth>
    <TextField
      label="Search: "
      placeholder="E.g. Conan, Dragon, ..."
      value={queryParams?.search ?? ''}
      onChange={onChange}
    />
  </FormControl>
);

export const Search = memo(SearchComponent);
