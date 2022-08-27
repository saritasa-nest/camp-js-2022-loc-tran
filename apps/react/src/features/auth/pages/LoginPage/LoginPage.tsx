import { FC, memo } from 'react';

import { LoginForm } from '../../components/LoginForm/LoginForm';
import styles from '../AuthPage.module.css';

/** Login page component. */
const LoginPageComponent: FC = () => (
  <div className={styles['form']}>
    <h1 className={styles['form__title']}>Login</h1>
    <LoginForm />
  </div>
);

export const LoginPage = memo(LoginPageComponent);
