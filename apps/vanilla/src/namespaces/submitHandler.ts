import { Account } from '@js-camp/core/models/account';

import { PROFILE_PAGE } from '../script/constants';
import { showErrorLogin, showErrorRegister } from '../script/renderToUI';
import { login } from '../services/login';
import { register } from '../services/register';
import { logout } from '../services/logout';

export namespace SubmitHandler {

  /**
   * Handle submit for login form.
   * @param event Event of submit login form.
   */
  export async function submitLoginForm(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    if (event.target !== null) {
      const formData = new FormData(event.target as HTMLFormElement);
      const email = formData.get('email');
      const password = formData.get('password');

      if (email !== null && password !== null) {
        const errorList = await login({ email: email.toString(), password: password.toString() });
        if (errorList !== null) {
          showErrorLogin(errorList);
        } else {
          location.replace(PROFILE_PAGE);
        }
      } else {
        showErrorLogin(['Email and password is required!']);
      }
    }
  }

  /**
   * Handle submit for register form.
   * @param event Event of submit register form.
   */
  export async function submitRegisterForm(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    if (event.target !== null) {
      const formData = new FormData(event.target as HTMLFormElement);
      const email = formData.get('email');
      const firstName = formData.get('first-name');
      const lastName = formData.get('last-name');
      const password = formData.get('password');
      const retypePassword = formData.get('retype-password');
      if (email !== null && firstName !== null && lastName !== null && password !== null && retypePassword !== null) {
        if (password.toString() !== retypePassword.toString()) {
          showErrorRegister(['Retype password does not matched!']);
          return;
        }
        const newAccount = new Account({
          email: email.toString(),
          firstName: firstName.toString(),
          lastName: lastName.toString(),
          password: password.toString(),
        });
        const errorList = await register(newAccount);
        if (errorList !== null) {
          showErrorLogin(errorList);
        } else {
          location.replace(PROFILE_PAGE);
        }
      } else {
        showErrorRegister(['All fields need to be filled!']);
      }
    }
  }

  /** Handle logout request. */
  export function handleLogout(): void {
    logout();
    location.replace(PROFILE_PAGE);
  }
}
