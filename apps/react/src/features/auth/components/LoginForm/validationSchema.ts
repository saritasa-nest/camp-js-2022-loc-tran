import * as Yup from 'yup';

const RequiredErrorMessage = 'This field is required!';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required(RequiredErrorMessage),
  password: Yup.string()
    .required(RequiredErrorMessage),
});
