import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { AnimeDetailDto } from '@js-camp/core/dtos/animeDetail.dto';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { DetailMapper } from '@js-camp/core/mappers/detail.mapper';
import { paginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { ParamsMapper } from '@js-camp/core/mappers/params.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { AnimeDetail } from '@js-camp/core/models/animeDetail';
import { Pagination } from '@js-camp/core/models/pagination';
import { Params } from '@js-camp/core/models/params';

import { http } from '../api';
import { COUNT_KEY } from '../script/constants/localStorageName';
import { renderAnime, renderPagination } from '../script/renderToUI';

/** Request address. */
export const ANIME_URL = '/api/v1/anime/anime/';

/**
 * Fetch anime data from api.
 * @param params Query parameters.
 */
export async function fetchAnime(params: PaginationParams): Promise<Pagination<Anime>> {
  try {
    const paramsDto = ParamsMapper.toDto(params);
    const response = await http.get<PaginationDto<AnimeDto>>(ANIME_URL, { params: paramsDto });
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
export async function updateTable(params: PaginationParams, currentPage = 0): Promise<void> {
  const data = await fetchAnime(params);
  localStorage.setItem(COUNT_KEY, data.count.toString());
  renderAnime(data);
  if (currentPage !== 0) {
    renderPagination(currentPage);
  }
}

/**
 * Fetch detail for a specific anime.
 * @param id Id of the anime.
 */
export async function getAnimeById(id: string): Promise<AnimeDetail> {
  try {
    const response = await http.get<AnimeDetailDto>(`${ANIME_URL}${id}/`);
    return DetailMapper.fromDto(response.data);
  } catch (error: unknown) {
    throw Error((error as Error).message);
  }
}
