import { Queries } from '@js-camp/core/models/query';

/** Enum for sorting. */
export enum Sorting {
  EnglishTitle = 'title_eng',
  AiredStart = 'aired__startswith',
  Status = 'status',
  Default = '',
}

export const NULL_OFFSET = '';
export const NULL_LIMIT = '';
export const NULL_ORDERING = '';
export const NULL_SORTING = '';
export const API_HEADER = 'Api-Key';
export const NUMBER_OF_COLUMNS = 6;
export const OFFSET = 0;
export const LIMIT = 25;
export const PAGE_STEP = 3;
export const DECIMAL = 10;
export const DEFAULT_PAGE = 1;
export const API_URL = import.meta.env.VITE_API_URL;
export const ANIME_ROUTE = '/api/v1/anime/anime/';
export const OFFSET_HEADER = 'offset';
export const LIMIT_HEADER = 'limit';
export const SORT_HEADER = 'ordering';

/** Options for sorting. */
export const SORT_OPTIONS = [
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
export const ORDER_OPTIONS = [
  {
    title: 'Ascending',
    value: '+',
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
      localStorageName: 'ANIME_OFFSET',
      value: 0,
      nullValue: '0',
    },
    {
      name: 'limit',
      localStorageName: 'ANIME_LIMIT',
      value: LIMIT,
      nullValue: '0',
    },
    {
      name: 'ordering',
      localStorageName: 'ANIME_SORT',
      value: '',
      nullValue: '',
    },
  ],
};
