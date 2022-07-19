import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { DetailDto } from '@js-camp/core/dtos/detail.dto';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { DetailMapper } from '@js-camp/core/mappers/detail.mapper';
import { paginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { ParamsMapper } from '@js-camp/core/mappers/params.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { Detail } from '@js-camp/core/models/detail';
import { Pagination } from '@js-camp/core/models/pagination';
import { Params } from '@js-camp/core/models/params';

import { http } from '../api';
import { COUNT_LS } from '../script/constants/localStorageName';
import { renderAnime, renderPagination } from '../script/renderToUI';

/** Request address. */
export const ANIME_ROUTE = '/api/v1/anime/anime/';

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
export async function getAnimeById(id: string): Promise<Detail> {
  try {
    const response = await http.get<DetailDto>(`${ANIME_ROUTE}${id}/`);
    return DetailMapper.fromDto(response.data);
  } catch (error: unknown) {
    throw Error((error as Error).message);
  }
}
