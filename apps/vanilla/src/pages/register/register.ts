import { AuthorizationChecker } from '../../namespaces/authorizationChecker';
import { initRegisterForm } from '../../script/init';
import { renderHeader } from '../../script/renderToUI';

renderHeader();
Middleware.checkIsNotLoggedIn();
initRegisterForm();
