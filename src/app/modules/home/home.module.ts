import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { TableComponent } from './pages/table/table.component';
import { DetailsComponent } from './pages/details/details.component';


@NgModule({
  declarations: [
    HomePageComponent,
    BlocksComponent,
    TableComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
