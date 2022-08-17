import { GenreDto, GenrePostDto } from '../dtos/genre.dto';
import { Genre, GenrePost } from '../models/genre';

export namespace GenreMapper {

  /**
   * Maps dto to model.
   * @param dto Genre dto.
   */
  export function fromDto(dto: GenreDto): Genre {
    return new Genre({
      id: dto.id,
      name: dto.name,
    });
  }

  /**
   * Maps model to post dto.
   * @param model Genre model.
   */
  export function toPostDto(model: GenrePost): GenrePostDto {
    return {
      name: model.name,

      // I used concrete value here because type of genre is
      // not use in application but required in api.
      type: 'GENRES',
    };
  }
}
