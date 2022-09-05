import { AnimeStatus, AnimeType, Sorting } from '@js-camp/core/models/anime';
import { PaginationParams } from '@js-camp/core/models/paginationParams';
import { DEFAULT_QUERY_PARAMS, getPaginationFromURLSearch } from '@js-camp/react/store/anime/dispatchers';
import {
  Checkbox,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  TextField,
} from '@mui/material';
import {
  ChangeEvent,
  Dispatch,
  FC,
  memo,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';

import { TabPanel } from '../../../../shared/components/TabPanel';

/** Specify order type for sort option. */
enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

/** Delay time after filter (ms). */
const DELAY_TIME = 300;

/** Separator between selection string. */
const multiSelectSeparator = ',';

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
  const [queryParams, setQueryParams] = useState<PaginationParams>(getPaginationFromURLSearch(searchParams));

  useEffect(() => {
    const filter = setTimeout(() => {
      if (queryParams === undefined) {
        return;
      }
      const paramsMap: Record<string, string> = {};
      for (const key of Object.keys(queryParams)) {
        paramsMap[key] = queryParams[key as keyof PaginationParams].toString();
      }
      setSearchParams(
        new URLSearchParams({
          ...searchParams,
          ...paramsMap,
        }),
      );
    }, DELAY_TIME);
    return () => clearTimeout(filter);
  }, [queryParams]);

  const handleSelectChange =
    (key: keyof PaginationParams): ((event: SelectChangeEvent) => void) =>
      event =>
      setQueryParams(
        prev =>
          new PaginationParams({
            ...(prev ?? DEFAULT_QUERY_PARAMS),
            [key]: event.target.value.toString() ?? '',
          }),
      );

  const handleMultiSelectChange =
    (
      key: keyof PaginationParams,
    ): ((event: SelectChangeEvent<string[]>) => void) =>
      event => {
      const { value } = event.target;
      setQueryParams(
        prev =>
          new PaginationParams({
            ...(prev ?? DEFAULT_QUERY_PARAMS),
            [key]:
              typeof value === 'string' ?
                value :
                value.join(multiSelectSeparator),
          }),
      );
    };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) =>
    setQueryParams(prev =>
      new PaginationParams({
        ...(prev ?? DEFAULT_QUERY_PARAMS),
        search: event.target.value,
      }));

  const handleTabChange = (event: SyntheticEvent, newValue: number) => setTabValue(newValue);

  return (
    <>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Search" {...passTabIdentifierProps(0)} />
        <Tab label="Field" {...passTabIdentifierProps(1)} />
        <Tab label="Type" {...passTabIdentifierProps(2)} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <TextField
          label="Search: "
          placeholder="E.g. Conan, Dragon, ..."
          value={queryParams?.search ?? ''}
          onChange={handleSearchChange}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Select
          value={queryParams?.sorting}
          label="Sort by: "
          onChange={handleSelectChange('sorting')}
        >
          {Object.values(Sorting).map(sorting => (
            <MenuItem value={sorting} key={sorting}>
              {sorting}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={queryParams?.ordering}
          label="Order by: "
          onChange={handleSelectChange('ordering')}
        >
          <MenuItem value={SortDirection.Ascending}>Ascending</MenuItem>
          <MenuItem value={SortDirection.Descending}>Descending</MenuItem>
        </Select>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <Select
          multiple
          value={queryParams?.type?.split(multiSelectSeparator) ?? []}
          label="Type: "
          onChange={handleMultiSelectChange('type')}
        >
          {Object.values(AnimeType).map(animeType => (
            <MenuItem value={animeType} key={animeType}>
              <Checkbox checked={queryParams?.type?.includes(animeType)} />
              <ListItemText primary={animeType} />
            </MenuItem>
          ))}
        </Select>
      </TabPanel>
    </>
  );
};

export const AnimeFilter = memo(AnimeFilterComponent);
