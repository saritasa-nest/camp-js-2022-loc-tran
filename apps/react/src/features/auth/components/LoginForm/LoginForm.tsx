import { FormError } from '@js-camp/core/models/httpError';
import { LoginData } from '@js-camp/core/models/loginData';
import { login } from '@js-camp/react/store/auth/dispatchers';
import { selectIsAuthLoading } from '@js-camp/react/store/auth/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { Form, Formik } from 'formik';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Token } from '@js-camp/core/models/token';
import { Button, CircularProgress } from '@mui/material';

import { useSnackbar } from '../../../../hooks/useSnackbar';
import { HOME_PAGE } from '../../../../routes/guards/IsNotLoggedIn';
import { MySnackbar } from '../../../../shared/components/MySnackbar';
import { FormTextField } from '../FormTextField';
import styles from '../AuthForm.module.css';

import { LoginSchema } from './validationSchema';

const LoginFormComponent: FC = () => {
  const { snackbarConfig, openSnackbar, handleCloseSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsAuthLoading);

  const onLoginFormSubmit = (values: LoginData) => {
    dispatch(login(values)).then(result => {
      if (result.payload instanceof FormError) {
        openSnackbar(result.payload.detail, 'error');
      } else if (result.payload instanceof Token) {
        navigate(HOME_PAGE);
      } else {
        openSnackbar('Unknown Error!', 'error');
      }
    });
  };

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
      <MySnackbar
        open={snackbarConfig.open}
        onClose={handleCloseSnackbar}
        message={snackbarConfig.message}
        severity={snackbarConfig.severity}
      />
    </>
  );
};

export const LoginForm = memo(LoginFormComponent);
