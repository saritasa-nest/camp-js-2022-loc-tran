import { GenreDto, GenreTypeDto } from '../dtos/genre.dto';
import { Genre, GenreType } from '../models/genre';

const genreTypeDtoToModel: Readonly<Record<GenreTypeDto, GenreType>> = {
  [GenreTypeDto.Demographics]: GenreType.Demographics,
  [GenreTypeDto.ExplicitGenres]: GenreType.ExplicitGenres,
  [GenreTypeDto.Genres]: GenreType.Genres,
  [GenreTypeDto.Themes]: GenreType.Themes,
};

const genreTypeModelToDto: Readonly<Record<GenreType, GenreTypeDto>> = {
  [GenreType.Demographics]: GenreTypeDto.Demographics,
  [GenreType.ExplicitGenres]: GenreTypeDto.ExplicitGenres,
  [GenreType.Genres]: GenreTypeDto.Genres,
  [GenreType.Themes]: GenreTypeDto.Themes,
};

export namespace GenreMapper {

  /**
   * Maps dto to model.
   * @param dto Genre dto.
   */
  export function fromDto(dto: GenreDto): Genre {
    return new Genre({
      id: dto.id,
      name: dto.name,
      type: genreTypeDtoToModel[dto.type],
      created: new Date(dto.created),
      modified: new Date(dto.modified),
    });
  }

  /**
   * Maps model to dto.
   * @param model Genre model.
   */
  export function toDto(model: Genre): GenreDto {
    return {
      id: model.id,
      name: model.name,
      type: genreTypeModelToDto[model.type],
      created: model.created.toString(),
      modified: model.created.toString(),
    };
  }
}
