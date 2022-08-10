import { Pipe, PipeTransform } from '@angular/core';

/** Transform date to locale string. */
@Pipe({
  name: 'localeDateString',
})
export class LocaleDateStringPipe implements PipeTransform {

  /**
   * Transform date to locale date string.
   * @param date Date to transform.
   */
  public transform(date: Date): string {
    return date.toLocaleDateString();
  }

}
