import * as Yup from 'yup';

const RequiredErrorMessage = 'This field is required!';

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required(RequiredErrorMessage),
  password: Yup.string()
    .required(RequiredErrorMessage),
  retypePassword: Yup.string()
    .required(RequiredErrorMessage)
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const initialFormValues = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  retypePassword: '',
};
