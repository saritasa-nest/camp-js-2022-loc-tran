import { FC, memo, ReactElement } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

interface Props {

  /** Link to redirect. */
  readonly to: string;

  /** Link elements. */
  readonly children: ReactElement | string;
}

const AppLinkComponent: FC<Props> = ({ to, children }) => {
  const [searchParams] = useSearchParams();
  return <Link to={`${to}?${searchParams.toString()}`}>{children}</Link>;
};

export const AppLink = memo(AppLinkComponent);
