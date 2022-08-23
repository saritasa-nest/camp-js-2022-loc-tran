import { FC, memo } from 'react';
import { Formik, Form } from 'formik';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store/store';
import { register } from '@js-camp/react/store/auth/dispatchers';
import { Account } from '@js-camp/core/models/account';
import * as Yup from 'yup';

import {
  selectAreAuthLoading,
  selectAuthError,
} from '@js-camp/react/store/auth/selectors';

import { FormTextField } from '../FormTextField';

const RequiredErrorMessage = 'This field is required!';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email.')
    .required(RequiredErrorMessage),
  password: Yup.string().required(RequiredErrorMessage),
  retypePassword: Yup.string().required(RequiredErrorMessage),
});

/** Register form component. */
const RegisterFormComponent: FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectAreAuthLoading);
  const registerError = useAppSelector(selectAuthError)?.data;
  const onRegisterFormSubmit = (values: Account) => {
    dispatch(register(values));
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
          helperText={registerError?.['email'].join('\n') ?? ''}
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
          helperText={registerError?.['password'].join('\n') ?? ''}
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
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
  return registerForm;
};

export const RegisterForm = memo(RegisterFormComponent);
