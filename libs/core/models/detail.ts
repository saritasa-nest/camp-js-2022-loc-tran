import { AnimeStatus, AnimeType } from './anime';
import { DateRange } from './dateRange';
import { Immerable, OmitImmerable } from './immerable';

/** Anime detail data. */
export class Detail extends Immerable {

  /** Id of the anime. */
  public readonly id: number;

  /** Created date of the anime. */
  public readonly created: string;

  /** Modified date of the anime. */
  public readonly modified: string;

  /** Link trailer on youtube. */
  public readonly trailerYoutube: string;

  /** Title in English of the anime. */
  public readonly titleEnglish: string;

  /** Title in Japanese of the anime. */
  public readonly titleJapanese: string;

  /** Type of the anime. */
  public readonly type: AnimeType;

  /** Status of the anime. */
  public readonly status: AnimeStatus;

  /** The anime is airing or not. */
  public readonly airing: boolean;

  /** Date time range of aired. */
  public readonly aired: DateRange;

  /** Synopsis of the anime. */
  public readonly synopsis: string;

  /** Background of the anime. */
  public readonly background: string;

  /** Studios data of the anime. */
  public readonly studiosData: readonly Studio[];

  /** Genre data of the anime. */
  public readonly genresData: readonly GenreData[];

  public constructor(data: DetailArgs) {
    super();
    this.id = data.id;
    this.created = data.created;
    this.modified = data.modified;
    this.trailerYoutube = data.trailerYoutube;
    this.titleEnglish = data.titleEnglish;
    this.titleJapanese = data.titleJapanese;
    this.type = data.type;
    this.status = data.status;
    this.airing = data.airing;
    this.aired = data.aired;
    this.synopsis = data.synopsis;
    this.background = data.background;
    this.studiosData = data.studiosData;
    this.genresData = data.genresData;
  }
}

type DetailArgs = OmitImmerable<Detail>;

/** Genre types. */
export enum GenreType {
  Genres = 'Genres',
  ExplicitGenres = 'Explicit genres',
  Themes = 'Themes',
  Demographics = 'Demographics',
}

/** Studio data. */
export interface Studio {

  /** Id of the studio. */
  readonly id: number;

  /** Created date of the studio. */
  readonly created: string;

  /** Modified date of the studio. */
  readonly modified: string;

  /** Name of the studio. */
  readonly name: string;
}

/** Genre data. */
export interface GenreData {

  /** Id of the Genre. */
  readonly id: number;

  /** Created date of the Genre. */
  readonly created: string;

  /** Modified date of the Genre. */
  readonly modified: string;

  /** Name of the Genre. */
  readonly name: string;

  /** Type of the Genre. */
  readonly type: GenreType;
}
