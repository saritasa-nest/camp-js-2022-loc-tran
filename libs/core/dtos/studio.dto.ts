export type PostStudioDto = Omit<StudioDto, 'id'>;

/** Studio dto data. */
export interface StudioDto {

  /** Id of the studio. */
  readonly id: number;

  /** Name of the studio. */
  readonly name: string;
}
