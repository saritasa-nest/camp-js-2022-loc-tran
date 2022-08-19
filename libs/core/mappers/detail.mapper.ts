/* eslint-disable @typescript-eslint/naming-convention */
import { AnimeDetailDto, AnimeDetailPostDto } from '../dtos/animeDetail.dto';
import { AnimeDetail, AnimeDetailPost } from '../models/animeDetail';

import { AnimeMapper } from './anime.mapper';
import { GenreMapper } from './genre.mapper';
import { StudioMapper } from './studio.mapper';

export namespace DetailMapper {

  /**
   * Maps dto to model.
   * @param dto Detail dto data.
   */
  export function fromDto(dto: AnimeDetailDto): AnimeDetail {
    return new AnimeDetail({
      ...AnimeMapper.fromDto(dto),
      trailerYoutube: dto.trailer_youtube_id,
      airing: dto.airing,
      synopsis: dto.synopsis,
      studiosData: dto.studios_data.map(studioDataDto => StudioMapper.fromDto(studioDataDto)),
      genresData: dto.genres_data.map(genreDataDto => GenreMapper.fromDto(genreDataDto)),
    });
  }

  /**
   * Maps model to dto.
   * @param model Anime detail model.
   */
  export function toPostDto(model: AnimeDetailPost): AnimeDetailPostDto {
    return {
      ...AnimeMapper.toPostDto(model),
      trailer_youtube_id: model.trailerYoutube,
      airing: model.airing,
      synopsis: model.synopsis,
      studios: model.studiosData.map(studioData => studioData.id),
      genres: model.genresData.map(genreData => genreData.id),
    };
  }
}
