import { FC, memo } from 'react';

import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

/** Register page component. */
const RegisterPageComponent: FC = () => (
  <>
    <RegisterForm />
  </>
);

export const RegisterPage = memo(RegisterPageComponent);
