import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { PlaceholderPipe } from './pipe/placeholder.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SafePipe } from './pipe/safe.pipe';
import { PluckPipe } from './pipe/pluck.pipe';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

/** Shared module. */
@NgModule({
  declarations: [
    HeaderComponent,
    PaginationComponent,
    SafePipe,
    PluckPipe,
    ImageModalComponent,
    PlaceholderPipe,
    ConfirmModalComponent,
  ],
  imports: [CommonModule, MatPaginatorModule, RouterModule],
  exports: [
    HeaderComponent,
    PaginationComponent,
    SafePipe,
    PluckPipe,
    PlaceholderPipe,
  ],
})
export class SharedModule {}
