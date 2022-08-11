import { AuthorizationChecker } from '../../namespaces/authorizationChecker';
import { initHomeProfile } from '../../script/init';

AuthorizationChecker.redirectUserNotLoggedIn();
initHomeProfile();
