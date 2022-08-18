import { Immerable, OmitImmerable } from './immerable';

export type StudioPost = Omit<Studio, 'id'>;

/** Studio data. */
export class Studio extends Immerable {

  /** Id of the Studio. */
  public readonly id: number;

  /** Name of the Studio. */
  public readonly name: string;

  public constructor(data: StudioArgs) {
    super();
    this.id = data.id;
    this.name = data.name;
  }
}

type StudioArgs = OmitImmerable<Studio>;
