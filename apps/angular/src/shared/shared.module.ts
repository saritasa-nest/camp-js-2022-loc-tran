import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

import { PaginationComponent } from './components/pagination/pagination.component';
import { DateToLocalePipe } from './pipe/date-to-locale.pipe';

/** Shared module. */
@NgModule({
  declarations: [DateToLocalePipe, PaginationComponent],
  imports: [CommonModule, MatPaginatorModule],
  exports: [DateToLocalePipe, PaginationComponent],
})
export class SharedModule {}
