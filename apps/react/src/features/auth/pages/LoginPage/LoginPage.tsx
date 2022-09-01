import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { LoginForm } from '../../components/LoginForm/LoginForm';
import { REGISTER_PAGE } from '../../paths';
import styles from '../AuthPage.module.css';

/** Login page component. */
const LoginPageComponent: FC = () => (
  <div className={styles['form']}>
    <h1 className={styles['form__title']}>Login</h1>
    <LoginForm />
    <Link to={REGISTER_PAGE}>Create new account!</Link>
  </div>
);

export const LoginPage = memo(LoginPageComponent);
