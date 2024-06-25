import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksComponent } from './components/blocks/blocks.component'
import { TableComponent } from './components/table/table.component'

const routes: Routes = [
  {
    path: 'blocks',
    component: BlocksComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: '**',
    redirectTo: 'blocks',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
