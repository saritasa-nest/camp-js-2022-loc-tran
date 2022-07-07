import { Pagination } from '../models/pagination';
import { PaginationDto } from '../dtos/pagination.dto';
import { Anime } from '../models/anime';
import { AnimeDto } from '../dtos/anime.dto';

import { animeMapper } from './anime.mapper';

export namespace paginationMapper {

  /**
   * @param dto Pagination dto.
   */
  export function fromDto(dto: PaginationDto<AnimeDto>): Pagination<Anime> {
    const results = dto.results.map(anime => animeMapper.fromDto(anime));
    const pagination: Pagination<Anime> = {
      count: dto.count,
      next: dto.next,
      previous: dto.previous,
      results,
    };
    return pagination;
  }
}
