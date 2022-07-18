import { Middleware } from '../../namespaces/middleware';
import { initLoginForm } from '../../script/init';

Middleware.checkIsNotLoggedIn();
initLoginForm();
