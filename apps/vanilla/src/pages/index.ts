import { updateAnime } from '../script/handleChange';
import { generateUrl } from '../script/generateUrl';
import { renderPagination, renderSortOptions } from '../script/renderToDOM';
import { LIMIT } from '../script/constants';

updateAnime(generateUrl(0, LIMIT, ''));
renderPagination();
renderSortOptions();
