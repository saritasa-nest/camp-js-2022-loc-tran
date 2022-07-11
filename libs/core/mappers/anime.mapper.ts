import { AnimeDto } from '../dtos/anime.dto';
import { Anime } from '../models/anime';

import { DateRangeMapper } from './dateRange.mapper';

export namespace AnimeMapper {

  /**
   * Maps dto to model.
   * @param dto Anime dto.
   */
  export function fromDto(dto: AnimeDto): Anime {
    return {
      id: dto.id,
      titleEnglish: dto.title_eng,
      titleJapanese: dto.title_jpn,
      image: dto.image,
      aired: DateRangeMapper.fromDto(dto.aired),
      type: dto.type,
      status: dto.status,
    };
  }
}
