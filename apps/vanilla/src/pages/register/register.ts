import { Middleware } from '../../namespaces/middleware';
import { initRegisterForm } from '../../script/init';
import { renderHeader } from '../../script/renderToUI';

renderHeader();
Middleware.checkIsNotLoggedIn();
initRegisterForm();
