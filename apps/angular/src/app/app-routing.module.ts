import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckIsNotLoggedInGuard } from '../core/guards/is-not-logged-in.guard';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'anime',
    loadChildren: () => import('./features/anime/anime.module').then(m => m.AnimeModule),
  },
  {
    path: 'auth',
    canLoad: [CheckIsNotLoggedInGuard],
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    redirectTo: '/anime',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

/** App routing module. */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  // I used HashLocationStrategy here for application deployment.
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
