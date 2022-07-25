import { AnimeDetailDto } from '../dtos/detail.dto';
import { AnimeStatus, AnimeType } from '../models/anime';
import { AnimeDetail } from '../models/detail';

import { animeStatusDtoToModel, animeTypeDtoToModel } from './anime.mapper';
import { DateRangeMapper } from './dateRange.mapper';
import { GenreDataMapper } from './genreData.mapper.dto';
import { StudioMapper } from './studio.mapper';

export namespace DetailMapper {

  /**
   * Maps dto to model.
   * @param dto Detail dto data.
   */
  export function fromDto(dto: AnimeDetailDto): AnimeDetail {
    const status = animeStatusDtoToModel[dto.status] !== undefined ? animeStatusDtoToModel[dto.status] : AnimeStatus.Airing;
    const type = animeTypeDtoToModel[dto.type] !== undefined ? animeTypeDtoToModel[dto.type] : AnimeType.Tv;
    return new AnimeDetail({
      id: dto.id,
      image: dto.image,
      trailerYoutube: dto.trailer_youtube_id,
      titleEnglish: dto.title_eng,
      titleJapanese: dto.title_jpn,
      type,
      status,
      airing: dto.airing,
      aired: DateRangeMapper.fromDto(dto.aired),
      synopsis: dto.synopsis,
      background: dto.background,
      studiosData: dto.studios_data.map(studioDataDto => StudioMapper.fromDto(studioDataDto)),
      genresData: dto.genres_data.map(genreDataDto => GenreDataMapper.fromDto(genreDataDto)),
    });
  }
}
