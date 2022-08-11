import { AuthorizationChecker } from '../../namespaces/authorizationChecker';
import { initLoginForm } from '../../script/init';
import { renderHeader } from '../../script/renderToUI';

renderHeader();
AuthorizationChecker.redirectUserLoggedIn();
initLoginForm();
