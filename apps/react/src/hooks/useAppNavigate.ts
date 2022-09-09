import { useNavigate, useSearchParams } from 'react-router-dom';

export const useAppNavigate = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const navigateWithSearchParams = (url: string) => {
    navigate(`${url}?${searchParams.toString()}`);
  };

  return { navigateWithSearchParams };
};
