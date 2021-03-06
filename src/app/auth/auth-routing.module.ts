import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPasswordRootComponent } from './containers/forgot-password-root/forgot-password-root.component';
import { SetPasswordRootComponent } from './containers/set-password-root/set-password-root.component';
import { SignInRootComponent } from './containers/sign-in-root/sign-in-root.component';
import { SignUpRootComponent } from './containers/sign-up-root/sign-up-root.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInRootComponent
      },
      {
        path: 'sign-up',
        component: SignUpRootComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordRootComponent
      },
      {
        path: 'set-password',
        component: SetPasswordRootComponent
      },
      {
        path: '',
        redirectTo: 'sign-in'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
