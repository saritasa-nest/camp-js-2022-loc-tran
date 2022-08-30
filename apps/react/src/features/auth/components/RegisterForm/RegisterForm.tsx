import { Account } from '@js-camp/core/models/account';
import { FormError } from '@js-camp/core/models/httpError';
import { register } from '@js-camp/react/store/auth/dispatchers';
import {
  selectAuthError,
  selectIsAuthLoading,
} from '@js-camp/react/store/auth/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { Button, CircularProgress } from '@mui/material';
import { clearErrors } from '@js-camp/react/store/auth/slice';
import { Form, Formik } from 'formik';
import { FC, memo, useEffect } from 'react';

import { MySnackbar } from '../../../../shared/components/MySnackbar/MySnackbar';
import styles from '../AuthForm.module.css';
import { FormTextField } from '../FormTextField';

import { RegisterSchema } from './validationSchema';

interface RegisterFormSubmitOptions {

  /** Set form errors. */
  setErrors: (fields: { [field: string]: string; }) => void;
}

const initialFormValues = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  retypePassword: '',
};

/** Register form component. */
const RegisterFormComponent: FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsAuthLoading);
  const error = useAppSelector(selectAuthError);

  useEffect(() => {
    dispatch(clearErrors());
  }, []);
  const onRegisterFormSubmit = (
    values: Account,
    { setErrors }: RegisterFormSubmitOptions,
  ) => {
    dispatch(register(values)).then(result => {
      if (result.payload instanceof FormError) {
        setErrors(result.payload.data);
      }
    });
  };

  const onCloseSnackbar = () => dispatch(clearErrors());

  const registerForm = (
    <Formik
      initialValues={initialFormValues}
      validationSchema={RegisterSchema}
      onSubmit={onRegisterFormSubmit}
    >
      <Form className={styles['form__content']}>
        <FormTextField
          label="Email: "
          name="email"
          placeholder="EX: abc@example.com"
          type="email"
          className={styles['form__field']}
        />
        <FormTextField
          label="First name: "
          name="firstName"
          placeholder="Jane"
          className={styles['form__field']}
        />
        <FormTextField
          label="Last name: "
          name="lastName"
          placeholder="Doe"
          className={styles['form__field']}
        />
        <FormTextField
          label="Password: "
          name="password"
          type="password"
          placeholder="Enter your password"
          className={styles['form__field']}
        />
        <FormTextField
          label="Retype password: "
          name="retypePassword"
          type="password"
          placeholder="Retype your password"
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
            'Submit'
          )}
        </Button>
      </Form>
    </Formik>
  );
  return (
    <>
      {registerForm}
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

export const RegisterForm = memo(RegisterFormComponent);
