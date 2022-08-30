import { LoginData } from '@js-camp/core/models/loginData';
import { login } from '@js-camp/react/store/auth/dispatchers';
import { selectAuthError, selectIsAuthLoading } from '@js-camp/react/store/auth/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { Button, CircularProgress } from '@mui/material';
import { Form, Formik } from 'formik';
import { FC, memo, useEffect } from 'react';
import { clearErrors } from '@js-camp/react/store/auth/slice';

import { MySnackbar } from '../../../../shared/components/MySnackbar';
import styles from '../AuthForm.module.css';
import { FormTextField } from '../FormTextField';

import { LoginSchema } from './validationSchema';

const LoginFormComponent: FC = () => {
  const error = useAppSelector(selectAuthError);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsAuthLoading);
  useEffect(() => {
    dispatch(clearErrors());
  }, []);
  const onLoginFormSubmit = (values: LoginData) => {
    dispatch(login(values));
  };
  const onCloseSnackbar = () => dispatch(clearErrors());

  const loginForm = (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={onLoginFormSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={styles['form__content']}>
        <FormTextField
          label="Email: "
          name="email"
          placeholder="E.g: abc@example.com"
          type="email"
          className={styles['form__field']}
        />
        <FormTextField
          label="Password: "
          name="password"
          type="password"
          placeholder="Enter your password"
          className={styles['form__field']}
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          className={`${styles['form__field']} ${styles['form__field--submit']}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress size={'20px'} color="inherit" />
          ) : (
            'Login'
          )}
        </Button>
      </Form>
    </Formik>
  );

  return (
    <>
      {loginForm}
      {error && (
        <MySnackbar
          message={error.detail}
          severity="error"
          onClose={onCloseSnackbar}
        />
      )}
    </>
  );
};

export const LoginForm = memo(LoginFormComponent);
