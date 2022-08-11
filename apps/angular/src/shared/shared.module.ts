import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DateToLocalePipe } from './pipe/date-to-locale.pipe';

/** Shared module. */
@NgModule({
  declarations: [DateToLocalePipe],
  imports: [CommonModule],
  exports: [DateToLocalePipe],
})
export class SharedModule {}
