import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterComponent } from './pages/enter/enter.component'

const routes: Routes = [
  {
    path: 'sign-in',
    component: EnterComponent,
  },
  {
    path: 'sign-up',
    component: EnterComponent,
  },
  {
    path: '**',
    redirectTo: 'sign-in'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
