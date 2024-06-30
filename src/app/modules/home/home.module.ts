import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { TableComponent } from './pages/table/table.component';
import { DetailsComponent } from './pages/details/details.component';
import { SearchComponent } from './components/search/search.component'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'


@NgModule({
  declarations: [
    HomePageComponent,
    BlocksComponent,
    TableComponent,
    DetailsComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
  ]
})
export class HomeModule { }
