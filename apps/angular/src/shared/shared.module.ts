import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

import { PlaceholderPipe } from './pipe/placeholder.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';

/** Shared module. */
@NgModule({
  declarations: [PaginationComponent, PlaceholderPipe],
  imports: [CommonModule, MatPaginatorModule],
  exports: [PaginationComponent, PlaceholderPipe],
})
export class SharedModule {}
