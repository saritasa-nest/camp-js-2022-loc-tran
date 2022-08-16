import { StudioDto } from '../dtos/studio.dto';
import { Studio } from '../models/animeDetail';

export namespace StudioMapper {

  /**
   * Maps dto to model.
   * @param dto Studio dto data.
   */
  export function fromDto(dto: StudioDto): Studio {
    return {
      id: dto.id,
      created: new Date(dto.created),
      modified: new Date(dto.modified),
      name: dto.name,
    };
  }

  /**
   * Maps model to dto.
   * @param model Studio model.
   */
  export function toDto(model: Studio): StudioDto {
    return {
      id: model.id,
      created: model.created.toString(),
      modified: model.created.toString(),
      name: model.name,
    };
  }
}
