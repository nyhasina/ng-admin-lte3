import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInRootComponent } from './containers/sign-in-root/sign-in-root.component';
import { SignUpRootComponent } from './containers/sign-up-root/sign-up-root.component';
import { ForgotPasswordRootComponent } from './containers/forgot-password-root/forgot-password-root.component';
import { SetPasswordRootComponent } from './containers/set-password-root/set-password-root.component';

@NgModule({
  declarations: [AuthComponent, SignInRootComponent, SignUpRootComponent, ForgotPasswordRootComponent, SetPasswordRootComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
