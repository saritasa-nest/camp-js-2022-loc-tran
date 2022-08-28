import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { paginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { PaginationParamsMapper } from '@js-camp/core/mappers/paginationParams.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { PaginationParams } from '@js-camp/core/models/paginationParams';

import { http } from '..';

const ANIME_URL = 'anime/anime/';

export const DEFAULT_QUERY_PARAMS = new PaginationParams({
  limit: 25,
  page: 0,
  ordering: '',
  sorting: '',
  type: '',
  search: '',
});

export namespace AnimeService {

  /**
   * Get anime data.
   * @param params Query parameters.
   */
  export async function getAnime(
    params = DEFAULT_QUERY_PARAMS,
  ): Promise<Anime[]> {
    const paramsDto = PaginationParamsMapper.toDto(params);
    const { data } = await http.get<PaginationDto<AnimeDto>>(ANIME_URL, {
      params: paramsDto,
    });
    return paginationMapper.fromDto(data, AnimeMapper.fromDto).results;
  }
}
