import { Pipe, PipeTransform } from '@angular/core';

/** Create placeholder. */
@Pipe({
  name: 'placeholder',
})
export class PlaceholderPipe implements PipeTransform {

  /**
   * Return placeholder if value is falsy.
   * @param value Value of target.
   * @param placeholder Placeholder string.
   */
  public transform(value: string, placeholder: string): string {
    return value || placeholder;
  }
}
