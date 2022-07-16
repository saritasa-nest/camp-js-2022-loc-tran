import { OrderOption, SortOption } from '@js-camp/core/models/option';

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
export const DEFAULT_LIMIT = '25';
export const DEFAULT_ORDERING = '';
export const FIRST_PAGE = 1;
export const LIMIT = 25;
export const OFFSET = 0;

/** Pagination config constants. */
export const NUMBER_OF_COLUMNS = 6;
export const PAGE_STEP = 3;
export const DECIMAL = 10;

/** Local storage name. */
export const COUNT_LS = 'COUNT';
export const SORT_LS = 'ANIME_SORT';
export const ORDER_LS = 'ANIME_ORDER';

/** Options for sorting. */
export const SORT_OPTIONS: Array<SortOption> = [
  {
    title: 'Default',
    value: Sorting.Default,
  },
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
export const DEFAULT_QUERIES = new URLSearchParams({
  offset: DEFAULT_OFFSET,
  limit: DEFAULT_LIMIT,
});
