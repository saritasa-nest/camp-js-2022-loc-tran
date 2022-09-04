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
   * @param paginationParams Query parameters.
   */
  export async function getAnime(paginationParams: PaginationParams): Promise<Anime[]> {
    const paramsDto = PaginationParamsMapper.toDto(paginationParams);
    const { data } = await http.get<PaginationDto<AnimeDto>>(ANIME_URL, {
      params: paramsDto,
    });
    const paginationAnime = paginationMapper.fromDto(data, AnimeMapper.fromDto);

    return paginationAnime.results;
  }
}
