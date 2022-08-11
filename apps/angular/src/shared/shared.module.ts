import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DateToLocalePipe } from './pipe/date-to-locale.pipe';

/** Shared module. */
@NgModule({
  declarations: [HeaderComponent, PaginationComponent, DateToLocalePipe],
  imports: [CommonModule, MatPaginatorModule, RouterModule],
  exports: [HeaderComponent, PaginationComponent, DateToLocalePipe],
})
export class SharedModule {}
