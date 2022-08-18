import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ChipsAutocompleteComponent } from './components/chips-autocomplete/chips-autocomplete.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PlaceholderPipe } from './pipe/placeholder.pipe';
import { PluckPipe } from './pipe/pluck.pipe';
import { SafePipe } from './pipe/safe.pipe';

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
    MatInputModule,
  ],
  exports: [
    HeaderComponent,
    PaginationComponent,
    SafePipe,
    PluckPipe,
    PlaceholderPipe,
    ChipsAutocompleteComponent,
  ],
})
export class SharedModule {}
