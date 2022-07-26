import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

import { PaginationComponent } from './components/pagination/pagination.component';

/** Shared module. */
@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
  ],
  exports: [
    PaginationComponent,
    CommonModule,
  ],
})
export class SharedModule {}
