import { Middleware } from '../../namespaces/middleware';
import { initHomeProfile } from '../../script/init';

Middleware.checkIsLoggedIn();
initHomeProfile();
