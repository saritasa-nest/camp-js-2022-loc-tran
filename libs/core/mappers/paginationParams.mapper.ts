import { PaginationParamsDto } from '../dtos/paginationParams.dto';
import { PaginationParams } from '../models/paginationParams';

export namespace PaginationParamsMapper {

  /**
   * Maps dto to model.
   * @param params Parameters data to Dto.
   */
  export function toDto(params: PaginationParams): PaginationParamsDto {
    return {
      offset: (params.page * params.limit).toString(),
      limit: params.limit.toString(),
      ordering: `${params.ordering}${params.sorting}`,
      type: params.type,
    };
  }
}
