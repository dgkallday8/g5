import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component'
import { DetailsComponent } from './pages/details/details.component'
import { DataPageComponent } from './pages/data-page/data-page.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blocks',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'blocks',
        component: DataPageComponent,
      },
      {
        path: 'table',
        component: DataPageComponent,
      },
    ]
  },
  {
    path: 'details/:login',
    component: DetailsComponent,
  },
  {
    path: '**',
    redirectTo: 'blocks'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
