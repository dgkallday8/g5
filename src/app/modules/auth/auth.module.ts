import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { SignInWithProvidersComponent } from './pages/sign-in-with-providers/sign-in-with-providers.component';
import { EnterComponent } from './pages/enter/enter.component'


@NgModule({
  declarations: [
    EnterComponent,
    SignInWithProvidersComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class AuthModule { }
