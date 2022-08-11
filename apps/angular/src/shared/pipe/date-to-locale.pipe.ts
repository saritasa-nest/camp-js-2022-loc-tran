import { Pipe, PipeTransform } from '@angular/core';

/** Date to locale string. */
@Pipe({
  name: 'dateToLocale',
})
export class DateToLocalePipe implements PipeTransform {

  /**
   * Transform date to locale string.
   * @param date Date value.
   */
  public transform(date: Date): string {
    return date.toLocaleString();
  }
}
