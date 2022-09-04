import { AnimeStatus, AnimeType, Sorting } from '@js-camp/core/models/anime';
import { PaginationParams } from '@js-camp/core/models/paginationParams';
import {
  Checkbox,
  ListItemText,
  MenuItem,
  PaginationItem,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  TextField,
} from '@mui/material';
import { ChangeEvent, Dispatch, FC, memo, SetStateAction, SyntheticEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { TabPanel } from '../../../../shared/components/TabPanel';

/** Specify order type for sort option. */
enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

/** Delay time after filter (ms). */
const DELAY_TIME = 300;

/**
 * Pass tab identifier props.
 * @param index Tab index.
 */
const passTabIdentifierProps = (index: number) => ({
  'id': `tab-${index}`,
  'aria-controls': `tabpanel-${index}`,
});

const AnimeFilterComponent: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tabValue, setTabValue] = useState<number>(0);
  const [queryParams, setQueryParams] = useState<PaginationParams>();

  useEffect(() => {
    const filter = setTimeout(() => {
      setSearchParams(new URLSearchParams({
        ...searchParams,
        ...queryParams,
      }));
    }, DELAY_TIME);
    return () => clearTimeout(filter);
  }, [queryParams]);

  const handleFilterChange =
    <T extends unknown>(
      setFilter: Dispatch<SetStateAction<T>>,
    ): ((event: SelectChangeEvent) => void) =>
      event => setFilter(event.target.value as T);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) =>
    setQueryParams(prev => new PaginationParams({
      ...prev,
      search: event.target.value ?? '',
    }));

  const handleTabChange = (event: SyntheticEvent, newValue: number) => setTabValue(newValue);

  return (
    <>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label='Search' {...passTabIdentifierProps(0)} />
        <Tab label='Field' {...passTabIdentifierProps(1)} />
        <Tab label='Type' {...passTabIdentifierProps(2)} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <TextField
          label="Search"
          placeholder="E.g. Conan, Dragon, ..."
          value={search}
          onChange={handleSearchChange}
        />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
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
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
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
      </TabPanel>
    </>
  );
};

export const AnimeFilter = memo(AnimeFilterComponent);
