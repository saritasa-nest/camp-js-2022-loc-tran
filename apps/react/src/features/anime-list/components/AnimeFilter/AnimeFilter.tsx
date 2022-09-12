import { PaginationParams } from '@js-camp/core/models/paginationParams';
import {
  DEFAULT_QUERY_PARAMS,
  getPaginationFromURLSearch,
} from '@js-camp/react/store/anime/dispatchers';
import {
  Tab,
  Tabs,
} from '@mui/material';
import {
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

/** Filter identifier props. */
enum TabType {
  SearchTab = 0,
  FieldTab = 1,
  TypeTab = 2,
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

  const handleSortParamsChange =
    (key: keyof PaginationParams): ((value: string) => void) =>
      value =>
      setQueryParams(
        prev =>
          new PaginationParams({
            ...(prev ?? DEFAULT_QUERY_PARAMS),
            [key]: value,
          }),
      );

  const handleTypeChange = (value: readonly string[]): void => {
      setQueryParams(
        prev =>
          new PaginationParams({
            ...(prev ?? DEFAULT_QUERY_PARAMS),
            type: value.join(typeSelectSeparator),
          }),
      );
    };

  const handleSearchChange = (searchKey: string) =>
    setQueryParams(
      prev =>
        new PaginationParams({
          ...(prev ?? DEFAULT_QUERY_PARAMS),
          search: searchKey,
        }),
    );

  const handleTabChange = (event: SyntheticEvent, newValue: number) =>
    setTabValue(newValue);

  return (
    <>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Search" {...passTabIdentifierProps(TabType.SearchTab)} />
        <Tab label="Field" {...passTabIdentifierProps(TabType.FieldTab)} />
        <Tab label="Type" {...passTabIdentifierProps(TabType.TypeTab)} />
      </Tabs>
      <TabPanel value={tabValue} index={TabType.SearchTab}>
        <Search search={queryParams.search} onChange={handleSearchChange} />
      </TabPanel>
      <TabPanel value={tabValue} index={TabType.FieldTab}>
        <Sort sorting={queryParams.sorting} ordering={queryParams.ordering} onFieldChange={handleSortParamsChange} />
      </TabPanel>
      <TabPanel value={tabValue} index={TabType.TypeTab}>
        <Type type={queryParams.type} handleTypeChange={handleTypeChange}/>
      </TabPanel>
    </>
  );
};

export const AnimeFilter = memo(AnimeFilterComponent);
