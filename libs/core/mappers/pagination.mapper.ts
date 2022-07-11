import { Pagination } from '../models/pagination';
import { PaginationDto } from '../dtos/pagination.dto';

export namespace paginationMapper {

  /**
   * Maps dto to model.
   * @param dto Pagination dto.
   * @param resultFromDto Mapper function.
   */
  export function fromDto<Dto, Model>(dto: PaginationDto<Dto>, resultFromDto: (result: Dto) => Model): Pagination<Model> {
    const results = dto.results.map(result => resultFromDto(result));
    return {
      count: dto.count,
      next: dto.next,
      previous: dto.previous,
      results,
    };
  }
}
