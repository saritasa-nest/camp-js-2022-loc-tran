import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SafePipe } from './pipe/safe.pipe';
import { LocaleDateStringPipe } from './pipe/locale-date-string.pipe';
import { PluckPipe } from './pipe/pluck.pipe';

/** Shared module. */
@NgModule({
  declarations: [HeaderComponent, PaginationComponent, SafePipe, LocaleDateStringPipe, PluckPipe],
  imports: [CommonModule, MatPaginatorModule, RouterModule],
  exports: [HeaderComponent, PaginationComponent, SafePipe, LocaleDateStringPipe, PluckPipe],
})
export class SharedModule {}
