import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckIsLoggedInGuard } from '../../../core/guards/is-logged-in.guard';

import { AddComponent } from './add/add.component';
import { AnimeTableComponent } from './anime-table/anime-table.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: AnimeTableComponent,
  },
  {
    path: 'detail/:animeId',
    component: DetailComponent,
    canActivate: [CheckIsLoggedInGuard],
  },
  {
    path: 'edit/:animeId',
    component: EditComponent,
    canActivate: [CheckIsLoggedInGuard],
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [CheckIsLoggedInGuard],
  },
];

/** Anime routing module. */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeRoutingModule {}
