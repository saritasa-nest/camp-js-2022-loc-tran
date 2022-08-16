import { AnimeDto } from './anime.dto';
import { GenreDto } from './genre.dto';
import { StudioDto } from './studio.dto';

/** Detail Dto data of the anime. */
export interface AnimeDetailDto extends AnimeDto {

  /** Link trailer on youtube. */
  readonly trailer_youtube_id: string;

  /** The anime is airing or not. */
  readonly airing: boolean;

  /** Synopsis of the anime. */
  readonly synopsis: string;

  /** Background of the anime. */
  readonly background: string;

  /** Studios data of the anime. */
  readonly studios_data: readonly StudioDto[];

  /** Genre data of the anime. */
  readonly genres_data: readonly GenreDto[];
}
