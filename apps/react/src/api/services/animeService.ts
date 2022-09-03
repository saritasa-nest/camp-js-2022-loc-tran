import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { paginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { PaginationParamsMapper } from '@js-camp/core/mappers/paginationParams.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { PaginationParams } from '@js-camp/core/models/paginationParams';

import { http } from '..';

const DEFAULT_QUERY_PARAMS = new PaginationParams({
  limit: 25,
  page: 0,
  ordering: '',
  sorting: '',
  type: '',
  search: '',
});

const ANIME_URL = 'anime/anime/';
export namespace AnimeService {
  let nextAnimeUrl: string | null = null;

  /**
   * Get anime data.
   * @param urlSearchParams Query parameters.
   */
  export async function getAnime(urlSearchParams: URLSearchParams): Promise<Anime[]> {

    const paramsMap: Record<string, string> = {};
    for (const key of Object.keys(DEFAULT_QUERY_PARAMS)) {
      paramsMap[key] = urlSearchParams.get(key) ?? '';
    }
    const paramsDto = PaginationParamsMapper.toDto(new PaginationParams({
      ...DEFAULT_QUERY_PARAMS,
      ...paramsMap,
    }));

    const { data } = await http.get<PaginationDto<AnimeDto>>(ANIME_URL, {
      params: paramsDto,
    });
    const paginationAnime = paginationMapper.fromDto(data, AnimeMapper.fromDto);
    setNextPageUrl(paginationAnime.next);

    return paginationAnime.results;
  }

  /** Get next page of anime. */
  export async function getMoreAnime(): Promise<Anime[]> {
    if (nextAnimeUrl === null) {
      return [];
    }
    const { data } = await http.get<PaginationDto<AnimeDto>>(nextAnimeUrl);
    const paginationAnime = paginationMapper.fromDto(data, AnimeMapper.fromDto);
    setNextPageUrl(paginationAnime.next);
    return paginationAnime.results;
  }

  /**
   * Set next anime page url.
   * @param url Next page url.
   */
  function setNextPageUrl(url: string | null): void {
    nextAnimeUrl = url;
  }
}
