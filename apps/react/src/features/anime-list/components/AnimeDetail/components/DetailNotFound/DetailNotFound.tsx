import { FC, memo } from 'react';

import { HOME_PAGE } from '../../../../../../routes/paths';
import { AppLink } from '../../../../../../shared/components/AppLink';

import styles from './DetailNotFound.module.css';

const DetailNotFoundComponent: FC = () => (
  <div className={styles['main']}>
    <h1 className={styles['main__title']}>Error 404. Page not found!</h1>
    <AppLink to={HOME_PAGE}>Go to home page.</AppLink>
  </div>
);

export const DetailNotFound = memo(DetailNotFoundComponent);
