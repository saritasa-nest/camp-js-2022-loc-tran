
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { Anime } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';

import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { paginationMapper } from '@js-camp/core/mappers/pagination.mapper';

import { http } from '../api';
import { renderAnime, renderPagination } from '../script/renderToDOM';
import { COUNT_LS } from '../script/constants';

/**
 * Fetch anime data from api.
 * @param url Api address.
 */
export async function fetchAnime(url: string): Promise<Pagination<Anime>> {
  try {
    const response = await http.get<PaginationDto<AnimeDto>>(url);

    return paginationMapper.fromDto(response.data, AnimeMapper.fromDto);
  } catch (error: unknown) {
    throw Error((error as Error).message);
  }
}

/**
 * Update Anime data after change something like sort or page.
 * @param url Api address.
 * @param currentPage Page number needs to load anime.
 */
export async function updateTable(url: string, currentPage = 0): Promise<void> {
  const data = await fetchAnime(url);
  localStorage.setItem(COUNT_LS, data.count.toString());
  renderAnime(data);
  if (currentPage !== 0) {
    renderPagination(data.count, currentPage);
  }
}
