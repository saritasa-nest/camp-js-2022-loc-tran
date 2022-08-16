import { AnimeDetail } from './animeDetail';
import { OmitImmerable } from './immerable';

/** Possible options anime season. */
export enum SeasonType {
  Summer = 'Summer',
  Winter = 'Winter',
  Spring = 'Spring',
  Fall = 'Fall',
  NonSeasonal = 'None seasonal',
}

/** Possible options anime rating. */
export enum RatingType {
  GeneralAudiences = 'G',
  ParentalGuidance = 'PG',
  ParentsStrongly = 'PG-13',
  Restricted = 'R-17',
  RestrictedPlus = 'R-PLUS',
  RestrictedX = 'R-X',
  Unknown = 'Unknown',
}

/** Possible options anime source. */
export enum SourceType {
  FourKomaManga = 'Four koma manga',
  Book = 'Book',
  CardGame = 'Card game',
  Game = 'game',
  LightNovel = 'Light novel',
  Manga = 'Manga',
  MixedMedia = 'Mixed media',
  Music = 'Music',
  Novel = 'Novel',
  Original = 'Original',
  PictureBook = 'Picture book',
  Radio = 'Radio',
  VisualNovel = 'Visual novel',
  WebManga = 'Web manga',
  WebNovel = 'Web novel',
  Other = 'Other',
  Unknown = 'Unknown',
}

/** Anime for editor or creator. */
export class AnimeManagement extends AnimeDetail {

  /** Source of the anime. */
  public readonly source: SourceType;

  /** Rating of the anime. */
  public readonly rating: RatingType;

  /** Season of the anime. */
  public readonly season: SeasonType;

  public constructor(data: AnimeManagementArgs) {
    super(data);
    this.source = data.source;
    this.rating = data.rating;
    this.season = data.season;
  }
}

type AnimeManagementArgs = OmitImmerable<AnimeManagement>;
