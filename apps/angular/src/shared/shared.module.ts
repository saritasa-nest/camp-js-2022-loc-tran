import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { PaginationComponent } from './components/pagination/pagination.component';

/** Shared module. */
@NgModule({
  declarations: [HeaderComponent, PaginationComponent],
  imports: [CommonModule, MatPaginatorModule, RouterModule],
  exports: [HeaderComponent, PaginationComponent],
})
export class SharedModule {}
