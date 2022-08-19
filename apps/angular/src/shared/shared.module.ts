import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './components/header/header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PlaceholderPipe } from './pipe/placeholder.pipe';

/** Shared module. */
@NgModule({
  declarations: [HeaderComponent, PaginationComponent, PlaceholderPipe],
  imports: [CommonModule, MatPaginatorModule, RouterModule, MatButtonModule],
  exports: [HeaderComponent, PaginationComponent, PlaceholderPipe],
})
export class SharedModule {}
