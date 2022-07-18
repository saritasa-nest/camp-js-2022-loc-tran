import { StudioDto } from '../dtos/detail.dto';
import { Studio } from '../models/detail';

export namespace StudioMapper {

  /**
   * Maps dto to model.
   * @param dto Studio dto data.
   */
  export function fromDto(dto: StudioDto): Studio {
    return {
      id: dto.id,
      created: dto.created,
      modified: dto.modified,
      name: dto.name,
    };
  }
}
