import { ParamsDto, SortingDto } from '../dtos/params.dto';
import { Params, Sorting } from '../models/params';

const sortToDto: Readonly<Record<Sorting, SortingDto>> = {
  [Sorting.Default]: SortingDto.Default,
  [Sorting.AiredStart]: SortingDto.AiredStart,
  [Sorting.EnglishTitle]: SortingDto.EnglishTitle,
  [Sorting.Status]: SortingDto.Status,
  [Sorting.AiredStartDecs]: SortingDto.AiredStartDecs,
  [Sorting.EnglishTitleDecs]: SortingDto.EnglishTitleDecs,
  [Sorting.StatusDecs]: SortingDto.StatusDecs,
};

export namespace ParamsMapper {

  /**
   * Maps dto to model.
   * @param params Parameters data to Dto.
   */
  export function toDto(params: Params): ParamsDto {
    const ordering = sortToDto[params.ordering] !== undefined ? sortToDto[params.ordering] : SortingDto.Default;
    return {
      offset: params.offset.toString(),
      limit: params.limit.toString(),
      ordering,
    };
  }
}
