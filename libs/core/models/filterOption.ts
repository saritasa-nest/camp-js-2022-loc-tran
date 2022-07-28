import { SelectOption } from './selectOption';

/** Define one filter feature like Sorting, filtering, searching, ... */
export interface FilterOption {

  /** Title for filter feature. */
  readonly title: string;

  /** Options for the feature. */
  readonly options: readonly SelectOption[];
}
