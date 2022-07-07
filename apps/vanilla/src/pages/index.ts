import { updateAnime } from '../script/handleChange';
import { generateUrl } from '../script/generateUrl';
import { initFilter, initPagination } from '../script/init';

updateAnime(generateUrl());
initPagination();
initFilter();
