import { GenreDataDto, GenreTypeDto } from '../dtos/animeDetail.dto';
import { GenreData, GenreType } from '../models/animeDetail';

export const typeGenreDtoToModel: Readonly<Record<GenreTypeDto, GenreType>> = {
  [GenreTypeDto.Demographics]: GenreType.Demographics,
  [GenreTypeDto.ExplicitGenres]: GenreType.ExplicitGenres,
  [GenreTypeDto.Genres]: GenreType.Genres,
  [GenreTypeDto.Themes]: GenreType.Themes,
};

export namespace GenreDataMapper {

  /**
   * Maps dto to model.
   * @param dto Genre data dto.
   */
  export function fromDto(dto: GenreDataDto): GenreData {
    const type = typeGenreDtoToModel[dto.type] !== undefined ? typeGenreDtoToModel[dto.type] : GenreType.Genres;
    return {
      id: dto.id,
      created: dto.created,
      modified: dto.modified,
      name: dto.name,
      type,
    };
  }
}
