import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { RegisterForm } from '../../components/RegisterForm';
import styles from '../AuthPage.module.css';

const LOGIN_PAGE = '/login';

/** Register page component. */
const RegisterPageComponent: FC = () => (
  <div className={styles['form']}>
    <h1 className={styles['form__title']}>Register</h1>
    <RegisterForm />
    <Link to={LOGIN_PAGE}>Already have an account? Login!</Link>
  </div>
);

export const RegisterPage = memo(RegisterPageComponent);
