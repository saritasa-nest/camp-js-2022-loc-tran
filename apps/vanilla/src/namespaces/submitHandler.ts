import { PROFILE_PAGE } from '../script/constants';
import { showErrorLogin, showErrorRegister } from '../script/renderToUI';
import { assertNonNullish } from '../script/utils';
import { login, logout, register } from '../services/auth';

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
        showErrorLogin(['Email and password are required!']);
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

      assertNonNullish(email);
      assertNonNullish(firstName);
      assertNonNullish(lastName);
      assertNonNullish(password);
      assertNonNullish(retypePassword);

      if (password.toString() !== retypePassword.toString()) {
        showErrorRegister(['Retype password does not matched!']);
        return;
      }
      const newAccount = {
        email: email.toString(),
        firstName: firstName.toString(),
        lastName: lastName.toString(),
        password: password.toString(),
      };
      const errorList = await register(newAccount);
      if (errorList !== null) {
        showErrorRegister(errorList);
      } else {
        location.replace(PROFILE_PAGE);
      }

    }
  }

  /** Handle logout request. */
  export async function handleLogout(): Promise<void> {
    await logout();
    location.replace(PROFILE_PAGE);
  }
}
