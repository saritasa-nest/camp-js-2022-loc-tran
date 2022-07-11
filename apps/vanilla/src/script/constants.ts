import { OrderingType, Query } from '@js-camp/core/models/query';

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
export const NUMBER_OF_COLUMNS = 6;
export const OFFSET = 0;
export const LIMIT = 25;
export const PAGE_STEP = 3;
export const DECIMAL = 10;
export const DEFAULT_PAGE = 1;
export const API_URL = import.meta.env.VITE_API_URL;

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
    value: OrderingType.Ascending,
  },
  {
    title: 'Descending',
    value: OrderingType.Descending,
  },
];

/** Default data for query. */
export const DEFAULT_QUERY: Query = {
  offset: 0,
  limit: LIMIT,
  ordering: OrderingType.Ascending,
  sorting: '',
};
