import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/** Safe url for iframe tag. */
@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {

  public constructor(private sanitizer: DomSanitizer) { }

  /**
   * Transform to safe url.
   * @param url Unsafe url.
   */
  public transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
