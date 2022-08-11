import { AuthorizationChecker } from '../../namespaces/authorizationChecker';
import { initRegisterForm } from '../../script/init';
import { renderHeader } from '../../script/renderToUI';

renderHeader();
AuthorizationChecker.redirectUserLoggedIn();
initRegisterForm();
