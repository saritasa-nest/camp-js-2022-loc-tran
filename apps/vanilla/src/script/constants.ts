import { Query } from '@js-camp/core/models/query';

/** Enum for sorting. */
export enum Sorting {
  EnglishTitle = 'title_eng',
  AiredStart = 'aired__startswith',
  Status = 'status',
  Default = '',
}

export const NULL_OFFSET = -1;
export const NULL_LIMIT = -1;
export const NULL_ORDERING = '';
export const NULL_SORTING = '';
export const API_HEADER = 'Api-Key';
export const OFFSET = 0;
export const LIMIT = 25;
export const PAGE_STEP = 3;
export const DECIMAL = 10;
export const DEFAULT_PAGE = 1;
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
export const DEFAULT_QUERY: Query = {
  offset: 0,
  limit: LIMIT,
  ordering: '',
  sorting: '',
};
