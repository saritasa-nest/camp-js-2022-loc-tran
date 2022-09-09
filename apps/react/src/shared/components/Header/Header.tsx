import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

import { UserMenu } from './UserMenu';

const pages = [
  {
    name: 'Anime table',
    path: '/anime',
  },
  {
    name: 'Genres',
    path: '/genres',
  },

  {
    name: 'Add Anime',
    path: '/anime/add',
  },
];

const HeaderComponent: FC = () => (
  <div className={styles['header']}>
    <div className={styles['header__pages']}>
      <h1 className={styles['header__title']}>JSCamp</h1>
      {pages.map(page => <Link className={styles['header__link']} key={page.name} to={page.path}>{page.name}</Link>)}
    </div>
    <UserMenu />
  </div>
);

export const Header = memo(HeaderComponent);
