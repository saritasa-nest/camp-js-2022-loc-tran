import { AnimeDto } from "../dtos/anime.dto";
import { Anime } from "../models/anime";
import { Pagination } from "../models/pagination";
import { PaginationDto } from "../dtos/pagination.dto";

export namespace animeMapper {

  /**
   * @param dto Pagination dto.
   */
  export function fromDto(dto: PaginationDto<AnimeDto>): Pagination<Anime> {
    const results = dto.results.map(animeDto => {
      const anime: Anime = {
        id: animeDto.id,
      };
      return anime;
    });
    const pagination: Pagination = {
      count: dto.count,
      next: dto.next,
      previous: dto.previous,
      results,
    };
    return pagination;
  }
}
