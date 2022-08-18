import { Anime } from './anime';
import { Genre } from './genre';
import { OmitImmerable } from './immerable';
import { Studio } from './studio';

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
  public readonly genresData: readonly Genre[];

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
