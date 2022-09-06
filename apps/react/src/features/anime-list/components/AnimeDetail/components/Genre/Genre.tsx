import { Genre as GenreAnime } from '@js-camp/core/models/genre';
import { FC, memo } from 'react';

import styles from './Genre.module.css';

interface Props {

  /** Anime genre. */
  readonly genre: GenreAnime;
}

const GenreComponent: FC<Props> = ({ genre }) => <div className={styles['genre']}>
  {genre.name}
</div>;

export const Genre = memo(GenreComponent);
