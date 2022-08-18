import { Immerable, OmitImmerable } from './immerable';

export type GenrePost = Omit<Genre, 'id' | 'type'>;

/** Genre data. */
export class Genre extends Immerable {

  /** Id of the Genre. */
  public readonly id: number;

  /** Name of the Genre. */
  public readonly name: string;

  public constructor(data: GenreArgs) {
    super();
    this.id = data.id;
    this.name = data.name;
  }
}

type GenreArgs = OmitImmerable<Genre>;
