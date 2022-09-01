import { Account } from '@js-camp/core/models/account';
import { FormError } from '@js-camp/core/models/httpError';
import { register } from '@js-camp/react/store/auth/dispatchers';
import {
  selectAuthError,
  selectIsAuthLoading,
} from '@js-camp/react/store/auth/selectors';
import { clearErrors } from '@js-camp/react/store/auth/slice';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { Button, CircularProgress } from '@mui/material';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { TextField } from 'formik-mui';
import { useSnackbar } from 'notistack';
import { FC, memo, useEffect } from 'react';

import styles from '../AuthForm.module.css';

import { initialFormValues, RegisterSchema } from './registerFormConfig';

interface RegisterFormSubmitOptions {

  /** Set form errors. */
  setErrors: (fields: Record<string, string>) => void;
}

/** Register form component. */
const RegisterFormComponent: FC = () => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const isLoading = useAppSelector(selectIsAuthLoading);
  const error = useAppSelector(selectAuthError);

  useEffect(() => {
    dispatch(clearErrors());
    if (error) {
      enqueueSnackbar(error.detail, { variant: 'error' });
    }
  }, [error]);

  const onRegisterFormSubmit = (
    values: Account,
    { setErrors }: RegisterFormSubmitOptions,
  ) => {
    formik.setSubmitting(false);
    dispatch(register(values)).then(result => {
      if (result.payload instanceof FormError) {
        setErrors(result.payload.data);
      }
    });
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: RegisterSchema,
    onSubmit: onRegisterFormSubmit,
  });

  const registerForm = (
    <FormikProvider value={formik}>
      <Form className={styles['form__content']}>
        <Field
          margin="normal"
          component={TextField}
          label="Email: "
          name="email"
          placeholder="e.g. abc@example.com"
          type="email"
        />
        <Field
          margin="normal"
          component={TextField}
          label="First name: "
          name="firstName"
          placeholder="Jane"
        />
        <Field
          margin="normal"
          component={TextField}
          label="Last name: "
          name="lastName"
          placeholder="Doe"
        />
        <Field
          margin="normal"
          component={TextField}
          label="Password: "
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <Field
          margin="normal"
          component={TextField}
          label="Retype password: "
          name="retypePassword"
          type="password"
          placeholder="Retype your password"
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
            'Submit'
          )}
        </Button>
      </Form>
    </FormikProvider>
  );
  return registerForm;
};

export const RegisterForm = memo(RegisterFormComponent);
