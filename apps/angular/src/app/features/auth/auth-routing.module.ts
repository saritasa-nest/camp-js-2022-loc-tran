import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckIsNotLoggedInGuard } from '../../../core/guards/is-not-logged-in.guard';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [CheckIsNotLoggedInGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];

/** Auth routing module. */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
