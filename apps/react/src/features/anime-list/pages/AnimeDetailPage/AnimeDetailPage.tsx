import { memo } from 'react';
import { useParams } from 'react-router-dom';

const AnimeDetailPageComponent = () => {
  const params = useParams();
  const { animeId } = params;

  return <h1>{animeId}</h1>;
};

export const AnimeDetailPage = memo(AnimeDetailPageComponent);
