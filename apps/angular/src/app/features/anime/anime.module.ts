import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { CheckIsLoggedInGuard } from '../../../core/guards/is-logged-in.guard';
import { CheckIsNotLoggedInGuard } from '../../../core/guards/is-not-logged-in.guard';

import { SharedModule } from '../../../shared/shared.module';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeTableComponent } from './anime-table/anime-table.component';
import { DetailComponent } from './detail/detail.component';

/** Anime module. */
@NgModule({
  declarations: [AnimeTableComponent, DetailComponent],
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
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [CheckIsLoggedInGuard, CheckIsNotLoggedInGuard],
})
export class AnimeModule {}
