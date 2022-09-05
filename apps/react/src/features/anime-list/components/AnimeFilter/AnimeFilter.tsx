import { PaginationParams } from '@js-camp/core/models/paginationParams';
import {
  DEFAULT_QUERY_PARAMS,
  getPaginationFromURLSearch,
} from '@js-camp/react/store/anime/dispatchers';
import {
  SelectChangeEvent,
  Tab,
  Tabs,
} from '@mui/material';
import {
  ChangeEvent,
  FC,
  memo,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';

import { TabPanel } from '../../../../shared/components/TabPanel';

import { Search } from './components/search/search';
import { Sort } from './components/sort/sort';
import { Type, typeSelectSeparator } from './components/type/type';

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
  const [queryParams, setQueryParams] = useState<PaginationParams>(getPaginationFromURLSearch(searchParams));

  useEffect(() => {
    setQueryParams(prev => new PaginationParams({
      ...prev,
      ...getPaginationFromURLSearch(searchParams),
    }));
  }, [searchParams]);

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

  const handleTypeChange = (event: SelectChangeEvent<string[]>): void => {
      const { value } = event.target;
      setQueryParams(
        prev =>
          new PaginationParams({
            ...(prev ?? DEFAULT_QUERY_PARAMS),
            type:
              typeof value === 'string' ?
                value :
                value.join(typeSelectSeparator),
          }),
      );
    };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) =>
    setQueryParams(
      prev =>
        new PaginationParams({
          ...(prev ?? DEFAULT_QUERY_PARAMS),
          search: event.target.value,
        }),
    );

  const handleTabChange = (event: SyntheticEvent, newValue: number) =>
    setTabValue(newValue);

  return (
    <>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Search" {...passTabIdentifierProps(0)} />
        <Tab label="Field" {...passTabIdentifierProps(1)} />
        <Tab label="Type" {...passTabIdentifierProps(2)} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <Search queryParams={queryParams} onChange={handleSearchChange} />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Sort queryParams={queryParams} onFieldChange={handleSelectChange} />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <Type queryParams={queryParams} handleTypeChange={handleTypeChange}/>
      </TabPanel>
    </>
  );
};

export const AnimeFilter = memo(AnimeFilterComponent);
