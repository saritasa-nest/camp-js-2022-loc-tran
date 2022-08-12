import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholderPipe } from './pipe/placeholder.pipe';

/** Shared module. */
@NgModule({
  declarations: [PlaceholderPipe],
  imports: [CommonModule],
  exports: [PlaceholderPipe],
})
export class SharedModule { }
