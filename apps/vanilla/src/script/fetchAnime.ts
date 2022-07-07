
import { Pagination } from '@js-camp/core/models/pagination';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { Anime } from '@js-camp/core/models/anime';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';

import { paginationMapper } from '@js-camp/core/mappers/pagination.mapper';

import { http } from '../api';

/**
 * Fetch anime data from api.
 * @param url Api address.
 */
export async function fetchAnime(url: string): Promise<Pagination<Anime> | Error > {
  try {
    const response = await http.get<PaginationDto<AnimeDto>>(url);
    const paginationData = response.data;

    return paginationMapper.fromDto(paginationData);
  } catch (error: unknown) {
    return new Error('Unknown error');
  }
}
