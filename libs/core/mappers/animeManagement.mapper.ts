import { AnimeManagementDto, AnimeManagementPostDto, RatingTypeDto, SeasonTypeDto, SourceTypeDto } from '../dtos/animeManagement.dto';
import { AnimeManagement, AnimeManagementPost, RatingType, SeasonType, SourceType } from '../models/animeManagement';

import { DetailMapper } from './detail.mapper';

const animeSourceModelToDto: Readonly<Record<SourceType, SourceTypeDto>> = {
  [SourceType.Book]: SourceTypeDto.Book,
  [SourceType.CardGame]: SourceTypeDto.CardGame,
  [SourceType.FourKomaManga]: SourceTypeDto.FourKomaManga,
  [SourceType.Game]: SourceTypeDto.Game,
  [SourceType.LightNovel]: SourceTypeDto.LightNovel,
  [SourceType.Manga]: SourceTypeDto.Manga,
  [SourceType.MixedMedia]: SourceTypeDto.MixedMedia,
  [SourceType.Music]: SourceTypeDto.Music,
  [SourceType.Novel]: SourceTypeDto.Novel,
  [SourceType.Original]: SourceTypeDto.Original,
  [SourceType.Other]: SourceTypeDto.Other,
  [SourceType.PictureBook]: SourceTypeDto.PictureBook,
  [SourceType.Radio]: SourceTypeDto.Radio,
  [SourceType.Unknown]: SourceTypeDto.Unknown,
  [SourceType.VisualNovel]: SourceTypeDto.VisualNovel,
  [SourceType.WebManga]: SourceTypeDto.WebManga,
  [SourceType.WebNovel]: SourceTypeDto.WebNovel,
};

const animeSourceDtoToModel: Readonly<Record<SourceTypeDto, SourceType>> = {
  [SourceTypeDto.Book]: SourceType.Book,
  [SourceTypeDto.CardGame]: SourceType.CardGame,
  [SourceTypeDto.FourKomaManga]: SourceType.FourKomaManga,
  [SourceTypeDto.Game]: SourceType.Game,
  [SourceTypeDto.LightNovel]: SourceType.LightNovel,
  [SourceTypeDto.Manga]: SourceType.Manga,
  [SourceTypeDto.MixedMedia]: SourceType.MixedMedia,
  [SourceTypeDto.Music]: SourceType.Music,
  [SourceTypeDto.Novel]: SourceType.Novel,
  [SourceTypeDto.Original]: SourceType.Original,
  [SourceTypeDto.Other]: SourceType.Other,
  [SourceTypeDto.PictureBook]: SourceType.PictureBook,
  [SourceTypeDto.Radio]: SourceType.Radio,
  [SourceTypeDto.Unknown]: SourceType.Unknown,
  [SourceTypeDto.VisualNovel]: SourceType.VisualNovel,
  [SourceTypeDto.WebManga]: SourceType.WebManga,
  [SourceTypeDto.WebNovel]: SourceType.WebNovel,
};

const animeRatingModelToDto: Readonly<Record<RatingType, RatingTypeDto>> = {
  [RatingType.GeneralAudiences]: RatingTypeDto.GeneralAudiences,
  [RatingType.ParentalGuidance]: RatingTypeDto.ParentalGuidance,
  [RatingType.ParentsStrongly]: RatingTypeDto.ParentsStrongly,
  [RatingType.Restricted]: RatingTypeDto.Restricted,
  [RatingType.RestrictedPlus]: RatingTypeDto.RestrictedPlus,
  [RatingType.RestrictedX]: RatingTypeDto.RestrictedX,
  [RatingType.Unknown]: RatingTypeDto.Unknown,
};

const animeRatingDtoToModel: Readonly<Record<RatingTypeDto, RatingType>> = {
  [RatingTypeDto.GeneralAudiences]: RatingType.GeneralAudiences,
  [RatingTypeDto.ParentalGuidance]: RatingType.ParentalGuidance,
  [RatingTypeDto.ParentsStrongly]: RatingType.ParentsStrongly,
  [RatingTypeDto.Restricted]: RatingType.Restricted,
  [RatingTypeDto.RestrictedPlus]: RatingType.RestrictedPlus,
  [RatingTypeDto.RestrictedX]: RatingType.RestrictedX,
  [RatingTypeDto.Unknown]: RatingType.Unknown,
};

const animeSeasonModelToDto: Readonly<Record<SeasonType, SeasonTypeDto>> = {
  [SeasonType.Fall]: SeasonTypeDto.Fall,
  [SeasonType.NonSeasonal]: SeasonTypeDto.NonSeasonal,
  [SeasonType.Spring]: SeasonTypeDto.Spring,
  [SeasonType.Summer]: SeasonTypeDto.Summer,
  [SeasonType.Winter]: SeasonTypeDto.Winter,
};

const animeSeasonDtoToModel: Readonly<Record<SeasonTypeDto, SeasonType>> = {
  [SeasonTypeDto.Fall]: SeasonType.Fall,
  [SeasonTypeDto.NonSeasonal]: SeasonType.NonSeasonal,
  [SeasonTypeDto.Spring]: SeasonType.Spring,
  [SeasonTypeDto.Summer]: SeasonType.Summer,
  [SeasonTypeDto.Winter]: SeasonType.Winter,
};

export namespace AnimeManagementMapper {

  /**
   * Maps dto to model.
   * @param dto Anime dto.
   */
  export function fromDto(dto: AnimeManagementDto): AnimeManagement {

    return new AnimeManagement({
      ...DetailMapper.fromDto(dto),
      source: animeSourceDtoToModel[dto.source],
      season: animeSeasonDtoToModel[dto.season],
      rating: animeRatingDtoToModel[dto.rating],
    });
  }

  /**
   * Maps model to dto.
   * @param model Anime model.
   */
  export function toPostDto(model: AnimeManagementPost): AnimeManagementPostDto {
    return {
      ...DetailMapper.toPostDto(model),
      source: animeSourceModelToDto[model.source],
      season: animeSeasonModelToDto[model.season],
      rating: animeRatingModelToDto[model.rating],
    };
  }
}
