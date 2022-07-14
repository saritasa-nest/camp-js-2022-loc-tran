
import { Pagination } from '@js-camp/core/models/pagination';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { Anime } from '@js-camp/core/models/anime';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';

import { paginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';

import { http } from '../api';
import { NEXT_PAGE_LS, PREVIOUS_PAGE_LS, COUNT_LS } from '../script/constants';
import { renderAnime, renderPagination } from '../script/renderToDOM';

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
 */
export async function updateAnime(url: string): Promise<void> {
  const data = await fetchAnime(url);

  localStorage.setItem(NEXT_PAGE_LS, data.next ?? '');
  localStorage.setItem(PREVIOUS_PAGE_LS, data.previous ?? '');
  localStorage.setItem(COUNT_LS, data.count.toString());
  renderAnime(data);

  renderPagination();
}
