import { AnimeDto } from '../dtos/anime.dto';
import { Anime } from '../models/anime';
import { Pagination } from '../models/pagination';
import { PaginationDto } from '../dtos/pagination.dto';

export namespace animeMapper {

  /**
   * @param dto Pagination dto.
   */
  export function fromDto(dto: PaginationDto<AnimeDto>): Pagination<Anime> {
    const results = dto.results.map(animeDto => {
      const anime: Anime = {
        id: animeDto.id,
        titleEng: animeDto.titleEng,
        titleJapan: animeDto.titleJapan,
        image: animeDto.image,
        start: animeDto.aired.start,
        end: animeDto.aired.end,
        type: animeDto.type,
        status: animeDto.status,
      };
      return anime;
    });
    const pagination: Pagination<Anime> = {
      count: dto.count,
      next: dto.next,
      previous: dto.previous,
      results,
    };
    return pagination;
  }
}
