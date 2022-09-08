import { Genre, GenrePost } from '@js-camp/core/models/genre';
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

  /**
   * Fetches genres by search key.
   * @param key Search key.
   */
  export async function getGenresByKey(key: string): Promise<Genre[]> {
    const { data } = await http.get<PaginationDto<GenreDto>>(GENRE_URL, {
      params: {
        search: key,
      },
    });
    return data.results.map(dto => GenreMapper.fromDto(dto));
  }

  /**
   * Add new genre.
   * @param genrePost Genre post data.
   */
  export async function addGenre(genrePost: GenrePost): Promise<Genre> {
    const { data } = await http.post<GenreDto>(GENRE_URL, {
      name: genrePost.name,
      type: 'GENRES',
    });
    return GenreMapper.fromDto(data);
  }
}
