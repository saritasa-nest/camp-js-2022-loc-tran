import { Link } from 'react-router-dom';
import { FC, memo } from 'react';

import { HOME_PAGE } from '../../../routes/paths';

import styles from './PageNotFound.module.css';

const PageNotFoundComponent: FC = () => (
  <div className={styles['main']}>
    <h1 className={styles['main__title']}>Error 404. Page not found!</h1>
    <Link to={HOME_PAGE}>Go to home page.</Link>
  </div>
);

export const PageNotFound = memo(PageNotFoundComponent);
