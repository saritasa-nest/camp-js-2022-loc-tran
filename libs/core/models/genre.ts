import { Immerable, OmitImmerable } from './immerable';

export type GenrePost = Omit<Genre, 'id' | 'type'>;

/** Genre. */
export class Genre extends Immerable {

  /** Id of the Genre. */
  public readonly id: number;

  /** Name of the Genre. */
  public readonly name: string;

  public constructor(data: PostInitArgs) {
    super();
    this.id = data.id;
    this.name = data.name;
  }
}

type PostInitArgs = OmitImmerable<Genre>;
