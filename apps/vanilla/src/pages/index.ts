import { Middleware } from '../namespaces/middleware';
import { initAnimeTable, initPagination, initQuery } from '../script/init';
import { renderHeader } from '../script/renderToUI';

Middleware.checkIsLoggedIn();
initAnimeTable();
initPagination();
initQuery();
renderHeader();
