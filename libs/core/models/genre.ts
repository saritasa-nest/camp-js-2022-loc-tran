import { Immerable, OmitImmerable } from './immerable';

/** Genre. */
export class Genre extends Immerable {

  /** Id of the Genre. */
  public readonly id: number;

  /** Created date of the Genre. */
  public readonly created: Date;

  /** Modified date of the Genre. */
  public readonly modified: Date;

  /** Name of the Genre. */
  public readonly name: string;

  /** Type of the Genre. */
  public readonly type: GenreType;

  public constructor(data: PostInitArgs) {
    super();
    this.id = data.id;
    this.name = data.name;
    this.created = data.created;
    this.modified = data.modified;
    this.type = data.type;
  }
}

type PostInitArgs = OmitImmerable<Genre>;

/** Genre types. */
export enum GenreType {
  Genres = 'Genres',
  ExplicitGenres = 'Explicit genres',
  Themes = 'Themes',
  Demographics = 'Demographics',
}
