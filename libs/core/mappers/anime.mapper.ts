/* eslint-disable @typescript-eslint/naming-convention */
import { AnimeDto, AnimeStatusDto, AnimeTypeDto } from '../dtos/anime.dto';
import { Anime, AnimeStatus, AnimeType } from '../models/anime';

import { DateRangeMapper } from './dateRange.mapper';

const animeStatusDtoToModel: Readonly<Record<AnimeStatusDto, AnimeStatus>> = {
  [AnimeStatusDto.Airing]: AnimeStatus.Airing,
  [AnimeStatusDto.Finished]: AnimeStatus.Finished,
  [AnimeStatusDto.NotYetAired]: AnimeStatus.NotYetAired,
};

const animeTypeDtoToModel: Readonly<Record<AnimeTypeDto, AnimeType>> = {
  [AnimeTypeDto.Movie]: AnimeType.Movie,
  [AnimeTypeDto.Music]: AnimeType.Music,
  [AnimeTypeDto.Ona]: AnimeType.Ona,
  [AnimeTypeDto.Ova]: AnimeType.Ova,
  [AnimeTypeDto.Special]: AnimeType.Special,
  [AnimeTypeDto.Tv]: AnimeType.Tv,
};

const animeStatusModelToDto: Readonly<Record<AnimeStatus, AnimeStatusDto>> = {
  [AnimeStatus.Airing]: AnimeStatusDto.Airing,
  [AnimeStatus.Finished]: AnimeStatusDto.Finished,
  [AnimeStatus.NotYetAired]: AnimeStatusDto.NotYetAired,
};

const animeTypeModelToDto: Readonly<Record<AnimeType, AnimeTypeDto>> = {
  [AnimeType.Movie]: AnimeTypeDto.Movie,
  [AnimeType.Music]: AnimeTypeDto.Music,
  [AnimeType.Ona]: AnimeTypeDto.Ona,
  [AnimeType.Ova]: AnimeTypeDto.Ova,
  [AnimeType.Special]: AnimeTypeDto.Special,
  [AnimeType.Tv]: AnimeTypeDto.Tv,
};

export namespace AnimeMapper {

  /**
   * Maps dto to model.
   * @param dto Anime dto.
   */
  export function fromDto(dto: AnimeDto): Anime {

    const status = animeStatusDtoToModel[dto.status];
    const type = animeTypeDtoToModel[dto.type];

    return new Anime({
      id: dto.id,
      titleEnglish: dto.title_eng,
      titleJapanese: dto.title_jpn,
      image: dto.image,
      aired: DateRangeMapper.fromDto(dto.aired),
      type,
      status,
    });
  }

  /**
   * Maps model to dto.
   * @param model Anime model.
   */
  export function toDto(model: Anime): AnimeDto {
    const status = animeStatusModelToDto[model.status];
    const type = animeTypeModelToDto[model.type];

    return {
      id: model.id,
      title_eng: model.titleEnglish,
      title_jpn: model.titleJapanese,
      image: model.image,
      aired: DateRangeMapper.toDto(model.aired),
      type,
      status,
    };
  }
}
