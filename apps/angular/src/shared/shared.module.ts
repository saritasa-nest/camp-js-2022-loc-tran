import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { PlaceholderPipe } from './pipe/placeholder.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';

/** Shared module. */
@NgModule({
  declarations: [HeaderComponent, PaginationComponent, PlaceholderPipe],
  imports: [CommonModule, MatPaginatorModule, RouterModule],
  exports: [HeaderComponent, PaginationComponent, PlaceholderPipe],
})
export class SharedModule {}
