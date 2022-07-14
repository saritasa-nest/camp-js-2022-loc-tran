import { OrderOption, SortOption } from '@js-camp/core/models/option';
import { Queries } from '@js-camp/core/models/query';

/** Sorting options for user. */
export enum Sorting {
  EnglishTitle = 'title_eng',
  AiredStart = 'aired__startswith',
  Status = 'status',
  Default = '',
}

/** Header for query. */
export const API_HEADER = 'Api-Key';
export const OFFSET_HEADER = 'offset';
export const LIMIT_HEADER = 'limit';
export const SORT_HEADER = 'ordering';

/** Request address. */
export const API_URL = import.meta.env.VITE_API_URL;
export const ANIME_ROUTE = '/api/v1/anime/anime/';

/** Default values of query if user don't pass any value. */
export const DEFAULT_OFFSET = '0';
export const DEFAULT_LIMIT = 25;
export const DEFAULT_ORDERING = '';
export const DEFAULT_SORTING = '';
export const DEFAULT_PAGE = 1;
export const LIMIT = 25;
export const OFFSET = 0;

/** Pagination config constants. */
export const NUMBER_OF_COLUMNS = 6;
export const PAGE_STEP = 3;
export const DECIMAL = 10;

/** Local storage name. */
export const NEXT_PAGE_LS = 'NEXT_PAGE_ANIME';
export const PREVIOUS_PAGE_LS = 'PREVIOUS_PAGE_ANIME';
export const COUNT_LS = 'COUNT';
export const PAGE_LS = 'ANIME_PAGE';
export const LIMIT_LS = 'ANIME_LIMIT';
export const OFFSET_LS = 'ANIME_OFFSET';
export const SORT_LS = 'ANIME_SORT';
export const ORDER_LS = 'ANIME_ORDER';

/** Options for sorting. */
export const SORT_OPTIONS: Array<SortOption> = [
  {
    title: 'Title in English',
    value: Sorting.EnglishTitle,
  },
  {
    title: 'Aired day',
    value: Sorting.AiredStart,
  },
  {
    title: 'Status',
    value: Sorting.Status,
  },
  {
    title: 'Default',
    value: Sorting.Default,
  },
];

/** Options for ordering. */
export const ORDER_OPTIONS: Array<OrderOption> = [
  {
    title: 'Ascending',
    value: '',
  },
  {
    title: 'Descending',
    value: '-',
  },
];

/** Default data for queries. */
export const DEFAULT_QUERIES: Queries = {
  queryList: [
    {
      name: 'offset',
      localStorageName: OFFSET_LS,
      value: DEFAULT_OFFSET,
      defaultValue: DEFAULT_OFFSET,
    },
    {
      name: 'limit',
      localStorageName: LIMIT_LS,
      value: LIMIT,
      defaultValue: DEFAULT_LIMIT,
    },
    {
      name: 'ordering',
      localStorageName: SORT_LS,
      value: DEFAULT_SORTING,
      defaultValue: DEFAULT_SORTING,
    },
  ],
};
