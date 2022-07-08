import { AnimeDto } from '../dtos/anime.dto';
import { Anime } from '../models/anime';

export namespace AnimeMapper {

  /**
   * @param dto Anime dto.
   */
  export function fromDto(dto: AnimeDto): Anime {
    const anime: Anime = {
      id: dto.id,
      titleEnglish: dto.title_eng,
      titleJapan: dto.title_jpn,
      image: dto.image,
      start: dto.aired.start,
      end: dto.aired.end,
      type: dto.type,
      status: dto.status,
    };
    return anime;
  }
}
