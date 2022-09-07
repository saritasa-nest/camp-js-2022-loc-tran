import { Genre } from '@js-camp/core/models/genre';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { GenreDto } from '@js-camp/core/dtos/genre.dto';
import { GenreMapper } from '@js-camp/core/mappers/genre.mapper';

import { http } from '..';

const GENRE_URL = 'anime/genres/';

export namespace GenresService {

  /** Fetches a list of genres. */
  export async function fetchGenres(): Promise<Genre[]> {
    const { data } = await http.get<PaginationDto<GenreDto>>(GENRE_URL);
    return data.results.map(dto => GenreMapper.fromDto(dto));
  }

  /** Fetches all existed genres. */
  export async function fetchAllGenres(): Promise<Genre[]> {
    const { data } = await http.get<PaginationDto<GenreDto>>(GENRE_URL);
    const length = data.count;
    const { data: allGenres } = await http.get<PaginationDto<GenreDto>>(GENRE_URL, {
      params: {
        limit: length,
      },
    });
    return allGenres.results.map(dto => GenreMapper.fromDto(dto));
  }
}
