import { Account } from '@js-camp/core/models/account';
import { register } from '@js-camp/react/store/auth/dispatchers';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { Form, Formik } from 'formik';
import { FC, memo, useState } from 'react';
import * as Yup from 'yup';
import { selectAreAuthLoading } from '@js-camp/react/store/auth/selectors';
import { FormError } from '@js-camp/core/models/httpError';
import { AlertColor, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { MySnackbar, MySnackbarConfig } from '../../../shared/components/MySnackbar/MySnackbar';
import { FormTextField } from '../FormTextField';

const RequiredErrorMessage = 'This field is required!';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email.')
    .required(RequiredErrorMessage),
  password: Yup.string().required(RequiredErrorMessage),
  retypePassword: Yup.string().required(RequiredErrorMessage),
});

const HOME_ROUTE = '/';

/** Register form component. */
const RegisterFormComponent: FC = () => {
  const navigate = useNavigate();
  const [snackbarConfig, setSnackbarConfig] = useState<MySnackbarConfig>({
    open: false,
    message: '',
    severity: 'success',
  });
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectAreAuthLoading);
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
        openSnackbar(result.payload.detail, 'error');
      } else if (result.payload instanceof Error) {
        openSnackbar('Unknown error!', 'error');
      } else {
        openSnackbar('Register successfully!', 'success');
        navigate(HOME_ROUTE);
      }
    });
  };
  const openSnackbar = (message: string, severity: AlertColor) => {
    setSnackbarConfig(prev => ({
      ...prev,
      message,
      severity,
      open: true,
    }));
  };
  const handleCloseSnackbar = () => {
    setSnackbarConfig(prev => ({
      ...prev,
      open: false,
    }));
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
      <Form>
        <FormTextField
          label="Email: "
          id="email"
          name="email"
          placeholder="EX: abc@example.com"
          type="email"
        />
        <FormTextField
          label="First name: "
          id="firstName"
          name="firstName"
          placeholder="Jane"
        />
        <FormTextField
          label="Last name: "
          id="lastName"
          name="lastName"
          placeholder="Doe"
        />
        <FormTextField
          label="Password: "
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <FormTextField
          label="Retype password: "
          id="retypePassword"
          name="retypePassword"
          type="password"
          placeholder="Retype our password"
        />
        <Button type="submit" variant="contained" color="success">
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
