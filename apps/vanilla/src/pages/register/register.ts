import { AuthorizationChecker } from '../../namespaces/authorizationChecker';
import { initRegisterForm } from '../../script/init';

AuthorizationChecker.checkIsNotLoggedIn();
initRegisterForm();
