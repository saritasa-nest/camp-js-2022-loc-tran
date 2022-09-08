import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { AnimeDetailDto } from '@js-camp/core/dtos/animeDetail.dto';
import { AnimeManagementDto } from '@js-camp/core/dtos/animeManagement.dto';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { AnimeManagementMapper } from '@js-camp/core/mappers/animeManagement.mapper';
import { DetailMapper } from '@js-camp/core/mappers/detail.mapper';
import { paginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { PaginationParamsMapper } from '@js-camp/core/mappers/paginationParams.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { AnimeDetail } from '@js-camp/core/models/animeDetail';
import {
  AnimeManagement,
} from '@js-camp/core/models/animeManagement';
import { PaginationParams } from '@js-camp/core/models/paginationParams';

import { http } from '..';

const ANIME_URL = 'anime/anime/';
export namespace AnimeService {
  let nextAnimeUrl: string | null = null;

  /**
   * Get anime data.
   * @param paginationParams Query parameters.
   */
  export async function getAnime(
    paginationParams: PaginationParams,
  ): Promise<Anime[]> {
    const paramsDto = PaginationParamsMapper.toDto(paginationParams);
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
   * Get anime detail by id.
   * @param id Anime id.
   */
  export async function getAnimeById(id: Anime['id']): Promise<AnimeDetail> {
    const { data } = await http.get<AnimeDetailDto>(`${ANIME_URL}${id}/`);
    return DetailMapper.fromDto(data);
  }

  /**
   * Delete anime by id.
   * @param id Anime id.
   */
  export async function deleteAnime(id: Anime['id']): Promise<void> {
    await http.delete(`${ANIME_URL}${id}/`);
  }

  /**
   * Edit anime.
   * @param animeData Data of edited anime.
   */
  export async function editAnime(
    animeData: AnimeManagement,
  ): Promise<AnimeManagement> {
    const { data } = await http.put<AnimeManagementDto>(
      `${ANIME_URL}${animeData.id}/`,
      AnimeManagementMapper.toPostDto(animeData),
    );
    return AnimeManagementMapper.fromDto(data);
  }

  /**
   * Get anime management data.
   * @param id Id of anime.
   */
  export async function getAnimeManagement(id: Anime['id']): Promise<AnimeManagement> {
    const { data } = await http.get<AnimeManagementDto>(`${ANIME_URL}${id}/`);
    return AnimeManagementMapper.fromDto(data);
  }

  /**
   * Set next anime page url.
   * @param url Next page url.
   */
  function setNextPageUrl(url: string | null): void {
    nextAnimeUrl = url;
  }
}
