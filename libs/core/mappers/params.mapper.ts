import { ParamsDto } from '../dtos/params.dto';
import { Params } from '../models/params';
export namespace ParamsMapper {

  /**
   * Maps dto to model.
   * @param params Parameters data to Dto.
   */
  export function toDto(params: Params): ParamsDto {
    return {
      offset: params.offset.toString(),
      limit: params.limit.toString(),
      ordering: params.ordering,
      search: params.search,
    };
  }
}
