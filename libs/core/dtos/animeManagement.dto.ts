import { AnimeDetailDto } from './animeDetail.dto';

/** Rating dto types. */
export enum RatingTypeDto {
  GeneralAudiences = 'G',
  ParentalGuidance = 'PG',
  ParentsStrongly = 'PG_13',
  Restricted = 'R_17',
  RestrictedPlus = 'R_PLUS',
  RestrictedX = 'R_X',
  Unknown = 'UNKNOWN',
}

/** Season dto types. */
export enum SeasonTypeDto {
  Summer = 'SUMMER',
  Winter = 'WINTER',
  Spring = 'SPRING',
  Fall = 'FALL',
  NonSeasonal = 'NON_SEASONAL',
}

/** Source dto types. */
export enum SourceTypeDto {
  FourKomaManga = 'FOUR_KOMA_MANGA',
  Book = 'BOOK',
  CardGame = 'CARD_GAME',
  Game = 'GAME',
  LightNovel = 'LIGHT_NOVEL',
  Manga = 'MANGA',
  MixedMedia = 'MIXED_MEDIA',
  Music = 'MUSIC',
  Novel = 'NOVEL',
  Original = 'ORIGINAL',
  PictureBook = 'PICTURE_BOOK',
  Radio = 'RADIO',
  VisualNovel = 'VISUAL_NOVEL',
  WebManga = 'WEB_MANGA',
  WebNovel = 'WEB_NOVEL',
  Other = 'OTHER',
  Unknown = 'UNKNOWN',
}

export interface AnimeManagementDto extends AnimeDetailDto {

  /** Source of the anime. */
  readonly source: SourceTypeDto;

  /** Rating of the anime. */
  readonly rating: RatingTypeDto;

  /** Season of the anime. */
  readonly season: SeasonTypeDto;
}
