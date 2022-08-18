import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { ChipsAutocompleteComponent } from './components/chips-autocomplete/chips-autocomplete.component';
import { HeaderComponent } from './components/header/header.component';
import { PlaceholderPipe } from './pipe/placeholder.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SafePipe } from './pipe/safe.pipe';
import { PluckPipe } from './pipe/pluck.pipe';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

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
    ChipsAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    PaginationComponent,
    SafePipe,
    PluckPipe,
    PlaceholderPipe,
  ],
})
export class SharedModule {}
