import { Middleware } from '../../namespaces/middleware';
import { initLoginForm } from '../../script/init';
import { renderHeader } from '../../script/renderToUI';

renderHeader();
Middleware.checkIsNotLoggedIn();
initLoginForm();
