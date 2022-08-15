import { Pipe, PipeTransform } from '@angular/core';

/** Create placeholder. */
@Pipe({
  name: 'placeholder',
})
export class PlaceholderPipe implements PipeTransform {

  /**
   * Return placeholder if value is null or empty.
   * @param value Value of target.
   */
  public transform(value: string | null): string {
    return value !== null && value !== '' ? value : 'Empty';
  }
}
