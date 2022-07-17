import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { Anime } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { paginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { ParamsMapper } from '@js-camp/core/mappers/params.mapper';
import { Params } from '@js-camp/core/models/params';

import { http } from '../api';
import { ANIME_ROUTE, COUNT_LS } from '../script/constants';
import { renderAnime, renderPagination } from '../script/renderToUI';

/**
 * Fetch anime data from api.
 * @param params Query parameters.
 */
export async function fetchAnime(params: Params): Promise<Pagination<Anime>> {
  try {
    const paramsDto = ParamsMapper.toDto(params);
    const response = await http.get<PaginationDto<AnimeDto>>(ANIME_ROUTE, { params: paramsDto });
    return paginationMapper.fromDto(response.data, AnimeMapper.fromDto);
  } catch (error: unknown) {
    throw Error((error as Error).message);
  }
}

/**
 * Update Anime data after change something like sort or page.
 * @param params Query parameters.
 * @param currentPage Page number needs to load anime.
 */
export async function updateTable(params: Params, currentPage = 0): Promise<void> {
  const data = await fetchAnime(params);
  localStorage.setItem(COUNT_LS, data.count.toString());
  renderAnime(data);
  if (currentPage !== 0) {
    renderPagination();
  }
}

/**
 * Fetch detail for a specific anime.
 * @param id Id of the anime.
 */
export async function getAnimeById(id: string) {
  try {
    const response = await http.get<PaginationDto<AnimeDto>>(`${ANIME_ROUTE}/${id}`);
    return paginationMapper.fromDto(response.data, AnimeMapper.fromDto);
  } catch (error: unknown) {
    throw Error((error as Error).message);
  }
}
