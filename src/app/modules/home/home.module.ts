import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailsComponent } from './pages/details/details.component';
import { SearchComponent } from './components/search/search.component'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DataPageComponent } from './pages/data-page/data-page.component'


@NgModule({
  declarations: [
    HomePageComponent,
    DetailsComponent,
    SearchComponent,
    DataPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NgbDropdownModule,
  ]
})
export class HomeModule { }
