import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

import { CheckIsLoggedInGuard } from '../../../core/guards/is-logged-in.guard';
import { CheckIsNotLoggedInGuard } from '../../../core/guards/is-not-logged-in.guard';

import { SharedModule } from '../../../shared/shared.module';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeTableComponent } from './anime-table/anime-table.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ManagementFormComponent } from './management-form/management-form.component';

/** Anime module. */
@NgModule({
  declarations: [
    AnimeTableComponent,
    DetailComponent,
    EditComponent,
    AddComponent,
    ManagementFormComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    AnimeRoutingModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSelectModule,
    MatOptionModule,
    MatSortModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
  ],
  providers: [CheckIsLoggedInGuard, CheckIsNotLoggedInGuard],
})
export class AnimeModule {}
