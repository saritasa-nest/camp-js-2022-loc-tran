import { Account } from '@js-camp/core/models/account';
import { FormError } from '@js-camp/core/models/httpError';
import { register } from '@js-camp/react/store/auth/dispatchers';
import { selectIsAuthLoading } from '@js-camp/react/store/auth/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { Button, CircularProgress } from '@mui/material';
import { Form, Formik } from 'formik';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Token } from '@js-camp/core/models/token';

import { useSnackbar } from '../../../../hooks/useSnackbar';
import { HOME_PAGE } from '../../../../routes/guards/IsNotLoggedIn';
import { MySnackbar } from '../../../../shared/components/MySnackbar/MySnackbar';
import { FormTextField } from '../FormTextField';
import styles from '../AuthForm.module.css';

import { RegisterSchema } from './validationSchema';

/** Register form component. */
const RegisterFormComponent: FC = () => {
  const navigate = useNavigate();
  const { snackbarConfig, openSnackbar, handleCloseSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsAuthLoading);
  const onRegisterFormSubmit = (
    values: Account,
    {
      setFieldError,
    }: { setFieldError: (field: string, errorMsg: string) => void; },
  ) => {
    dispatch(register(values)).then(result => {
      if (result.payload instanceof FormError) {
        for (const key of Object.keys(result.payload.data)) {
          result.payload.data[key].forEach(error =>
            setFieldError(key, error));
        }
        openSnackbar(result.payload.detail, 'error', 3000);
      } else if (result.payload instanceof Token) {
        navigate(HOME_PAGE);
      } else {
        openSnackbar('Unknown error!', 'error', 3000);
      }
    });
  };

  const registerForm = (
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        retypePassword: '',
      }}
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
      <MySnackbar
        open={snackbarConfig.open}
        onClose={handleCloseSnackbar}
        message={snackbarConfig.message}
        severity={snackbarConfig.severity}
      />
    </>
  );
};

export const RegisterForm = memo(RegisterFormComponent);
