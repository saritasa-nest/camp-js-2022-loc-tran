import { Middleware } from '../../namespaces/middleware';
import { initRegisterForm } from '../../script/init';

Middleware.checkIsNotLoggedIn();
initRegisterForm();
