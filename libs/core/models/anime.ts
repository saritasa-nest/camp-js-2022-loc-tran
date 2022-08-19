import { DateRange } from './dateRange';
import { Immerable, OmitImmerable } from './immerable';

/** Specify anime types in anime table. */
export enum AnimeType {
  Tv = 'TV',
  Ova = 'OVA',
  Movie = 'MOVIE',
  Special = 'SPECIAL',
  Ona = 'ONA',
  Music = 'MUSIC',
}

/** Specify anime status in anime table. */
export enum AnimeStatus {
  Finished = 'FINISHED',
  NotYetAired = 'NOT_YET_AIRED',
  Airing = 'AIRING',
}

/** Sorting options for user. */
export enum Sorting {
  Default = '',
  EnglishTitle = 'title_eng',
  AiredStart = 'aired__startswith',
  Status = 'status',
}

export type AnimePost = Omit<Anime, 'id'>;

/** Define data in class Anime. */
export class Anime extends Immerable {

  /** Id of the anime. */
  public readonly id: number;

  /** English title of the anime. */
  public readonly titleEnglish: string;

  /** Japanese title of the anime. */
  public readonly titleJapanese: string;

  /** Image of the anime. */
  public readonly image: string;

  /** Aired of the anime. */
  public readonly aired: DateRange;

  /** Type of the anime. */
  public readonly type: AnimeType;

  /** Status of the anime. */
  public readonly status: AnimeStatus;

  public constructor(data: AnimeArgs) {
    super();
    this.id = data.id;
    this.titleEnglish = data.titleEnglish;
    this.titleJapanese = data.titleJapanese;
    this.image = data.image;
    this.aired = data.aired;
    this.type = data.type;
    this.status = data.status;
  }
}

type AnimeArgs = OmitImmerable<Anime>;
