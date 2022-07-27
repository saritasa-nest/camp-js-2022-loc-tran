import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { PaginationComponent } from './components/pagination/pagination.component';
import { SelectComponent } from './components/select/select.component';

/** Shared module. */
@NgModule({
  declarations: [PaginationComponent, SelectComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSelectModule,
    MatOptionModule,
  ],
  exports: [PaginationComponent, SelectComponent, CommonModule],
})
export class SharedModule {}
