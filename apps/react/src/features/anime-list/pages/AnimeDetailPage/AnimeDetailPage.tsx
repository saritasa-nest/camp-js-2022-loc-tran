import { memo } from 'react';

import { AnimeDetail } from '../../components/AnimeDetail/AnimeDetail';

const AnimeDetailPageComponent = () => <AnimeDetail />;

export const AnimeDetailPage = memo(AnimeDetailPageComponent);
