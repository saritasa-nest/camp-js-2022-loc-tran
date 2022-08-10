import { Pipe, PipeTransform } from '@angular/core';

/** Join an array to string of one specify key. */
@Pipe({
  name: 'pluck',
})
export class PluckPipe implements PipeTransform {
  /**
   * Transform array to string.
   * @param input Input array.
   * @param key Key value.
   */
  public transform<T>(input: readonly T[], key: string): string {
    return input.map(value => value[key as keyof T]).join(', ');
  }
}
