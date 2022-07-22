import { AnimeDto, AnimeStatusDto, AnimeTypeDto } from '../dtos/anime.dto';
import { Anime, AnimeStatus, AnimeType } from '../models/anime';

import { DateRangeMapper } from './dateRange.mapper';

export const animeStatusDtoToModel: Readonly<Record<AnimeStatusDto, AnimeStatus>> = {
  [AnimeStatusDto.Airing]: AnimeStatus.Airing,
  [AnimeStatusDto.Finished]: AnimeStatus.Finished,
  [AnimeStatusDto.NotYetAired]: AnimeStatus.NotYetAired,
};

export const animeTypeDtoToModel: Readonly<Record<AnimeTypeDto, AnimeType>> = {
  [AnimeTypeDto.Movie]: AnimeType.Movie,
  [AnimeTypeDto.Music]: AnimeType.Music,
  [AnimeTypeDto.Ona]: AnimeType.Ona,
  [AnimeTypeDto.Ova]: AnimeType.Ova,
  [AnimeTypeDto.Special]: AnimeType.Special,
  [AnimeTypeDto.Tv]: AnimeType.Tv,
};

export namespace AnimeMapper {

  /**
   * Maps dto to model.
   * @param dto Anime dto.
   */
  export function fromDto(dto: AnimeDto): Anime {

    const status = animeStatusDtoToModel[dto.status];
    const type = animeTypeDtoToModel[dto.type];

    return {
      id: dto.id,
      titleEnglish: dto.title_eng,
      titleJapanese: dto.title_jpn,
      image: dto.image,
      aired: DateRangeMapper.fromDto(dto.aired),
      type,
      status,
    };
  }
}
