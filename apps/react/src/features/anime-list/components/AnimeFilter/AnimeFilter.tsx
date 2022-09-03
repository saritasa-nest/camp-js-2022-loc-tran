import { AnimeStatus, AnimeType } from '@js-camp/core/models/anime';
import {
  Autocomplete,
  Checkbox,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { FC, memo, useState, Dispatch, SetStateAction, ChangeEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

// Delay time after filter (ms)
const DELAY_TIME = 300;

const AnimeFilterComponent: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>('');
  const [status, setStatus] = useState<AnimeStatus | ''>('');
  const [type, setType] = useState<AnimeType[]>([]);

  useEffect(() => {
    const filter = setTimeout(() => {
      setSearchParams(new URLSearchParams({
        ...searchParams,
        search,
        status,
        type: type.join(','),
      }));
    }, DELAY_TIME);
    return () => clearTimeout(filter);
  }, [search, status, type]);

  const handleFilterChange =
    <T extends unknown>(
      setFilter: Dispatch<SetStateAction<T>>,
    ): ((event: SelectChangeEvent) => void) =>
      event => setFilter(event.target.value as T);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);

  return (
    <>
      <TextField
        label="Search"
        placeholder="E.g. Conan, Dragon, ..."
        value={search}
        onChange={handleSearchChange}
      />
      <Select
        value={status}
        label="Status"
        onChange={handleFilterChange(setStatus)}
      >
        {Object.values(AnimeStatus).map(animeStatus => (
          <MenuItem value={animeStatus} key={animeStatus}>
            {animeStatus}
          </MenuItem>
        ))}
      </Select>
      <Select
        multiple
        value={type}
        label="Type"
        onChange={handleFilterChange(setType)}
      >
        {Object.values(AnimeType).map(animeType => (
          <MenuItem value={animeType} key={animeType}>
            <Checkbox checked={type.includes(animeType)} />
            <ListItemText primary={animeType} />
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export const AnimeFilter = memo(AnimeFilterComponent);
