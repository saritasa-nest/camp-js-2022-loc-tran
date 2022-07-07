
import { Pagination } from '@js-camp/core/models/pagination';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { Anime } from '@js-camp/core/models/anime';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';

import { animeMapper } from '@js-camp/core/mappers/anime.mapper';

import { http } from '../api';

/**
 * Fetch anime data from api.
 * @param url Api address.
 */
export async function fetchAnime(url: string): Promise<Pagination<Anime> | Error > {
  try {
    const response = await http.get<PaginationDto<AnimeDto>>(url);
    const animeData = response.data;

    return animeMapper.fromDto(animeData);
  } catch (error: unknown) {
    return new Error('Unknown error');
  }
}
