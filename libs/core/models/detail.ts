import { Anime } from './anime';
import { OmitImmerable } from './immerable';

/** Anime detail data. */
export class AnimeDetail extends Anime {

  /** Link trailer on youtube. */
  public readonly trailerYoutube: string;

  /** The anime is airing or not. */
  public readonly airing: boolean;

  /** Synopsis of the anime. */
  public readonly synopsis: string;

  /** Background of the anime. */
  public readonly background: string;

  /** Studios data of the anime. */
  public readonly studiosData: readonly Studio[];

  /** Genre data of the anime. */
  public readonly genresData: readonly GenreData[];

  public constructor(data: DetailArgs) {
    super(data);
    this.trailerYoutube = data.trailerYoutube;
    this.airing = data.airing;
    this.synopsis = data.synopsis;
    this.background = data.background;
    this.studiosData = data.studiosData;
    this.genresData = data.genresData;
  }
}

type DetailArgs = OmitImmerable<AnimeDetail>;

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
