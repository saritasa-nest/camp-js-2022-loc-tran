import { updateAnime } from '../script/handleChange';
import { generateUrl } from '../script/generateUrl';
import { initFilter, initPagination } from '../script/init';
import { DEFAULT_QUERY } from '../script/constants';

updateAnime(generateUrl(DEFAULT_QUERY));
initPagination();
initFilter();
