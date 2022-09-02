import { LoginData } from '@js-camp/core/models/loginData';
import { login } from '@js-camp/react/store/auth/dispatchers';
import {
  selectAuthError,
  selectIsAuthLoading,
} from '@js-camp/react/store/auth/selectors';
import { clearErrors } from '@js-camp/react/store/auth/slice';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { Button, CircularProgress } from '@mui/material';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { FC, memo, useEffect } from 'react';
import { TextField } from 'formik-mui';
import { useSnackbar } from 'notistack';

import styles from '../AuthForm.module.css';

import { initialFormValues, LoginSchema } from './loginFormConfig';

const LoginFormComponent: FC = () => {
  const error = useAppSelector(selectAuthError);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsAuthLoading);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error.detail, { variant: 'error' });
    }
    dispatch(clearErrors());
  }, [error]);

  const onLoginFormSubmit = (values: LoginData) => {
    formik.setSubmitting(false);
    dispatch(login(values));
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    onSubmit: onLoginFormSubmit,
    validationSchema: LoginSchema,
  });

  const loginForm = (
    <FormikProvider value={formik}>
      <Form className={styles['form__content']}>
        <Field
          margin="normal"
          component={TextField}
          label="Email: "
          name="email"
          placeholder="E.g: abc@example.com"
          type="email"
        />
        <Field
          margin="normal"
          component={TextField}
          label="Password: "
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          disabled={isLoading}
          sx={{ my: 3, minHeight: '50px' }}
        >
          {isLoading ? (
            <CircularProgress size={'20px'} color="inherit" />
          ) : (
            'Login'
          )}
        </Button>
      </Form>
    </FormikProvider>
  );

  return loginForm;
};

export const LoginForm = memo(LoginFormComponent);
