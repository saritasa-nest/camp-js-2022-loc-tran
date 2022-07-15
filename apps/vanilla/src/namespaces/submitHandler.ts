import { Account } from '@js-camp/core/models/account';
import { LoginData } from '@js-camp/core/models/loginData';

import { PROFILE_PAGE } from '../script/constants';
import { showErrorLogin, showErrorRegister } from '../script/renderToUI';
import { login } from '../services/login';
import { register } from '../services/register';

export namespace submitHandler {

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
        const loginData = new LoginData({ email: email.toString(), password: password.toString() });
        const auth = await login(loginData);
        localStorage.setItem('ACCESS_TOKEN', auth.accessToken);
        localStorage.setItem('REFRESH_TOKEN', auth.refreshToken);
        location.replace(PROFILE_PAGE);
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
        const auth = await register(newAccount);
        localStorage.setItem('ACCESS_TOKEN', auth.accessToken);
        localStorage.setItem('REFRESH_TOKEN', auth.refreshToken);
        location.replace(PROFILE_PAGE);
      } else {
        showErrorRegister(['All fields need to be filled!']);
      }
    }
  }

  /** Handle logout request. */
  export function handleLogout(): void {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('REFRESH_TOKEN');
    location.replace(PROFILE_PAGE);
  }
}
