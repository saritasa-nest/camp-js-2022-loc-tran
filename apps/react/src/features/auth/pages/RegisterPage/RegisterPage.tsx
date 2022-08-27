import { FC, memo } from 'react';

import { RegisterForm } from '../../components/RegisterForm';
import styles from '../AuthPage.module.css';

/** Register page component. */
const RegisterPageComponent: FC = () => (
  <div className={styles['form']}>
    <h1 className={styles['form__title']}>Register</h1>
    <RegisterForm />
  </div>
);

export const RegisterPage = memo(RegisterPageComponent);
