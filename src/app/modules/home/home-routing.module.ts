import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksComponent } from './pages/blocks/blocks.component'
import { TableComponent } from './pages/table/table.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { DetailsComponent } from './pages/details/details.component'

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'blocks',
        component: BlocksComponent,
      },
      {
        path: 'table',
        component: TableComponent,
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
