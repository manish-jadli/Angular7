import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main.route';
import { HomeComponent } from './home.component';
import { FacilityComponent } from './facility/facility.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MainComponent } from './main.component';
import { ResultsComponent } from './results/results.component';
import { ResultPipe } from './results/result.pipe';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot()
  ],
  declarations: [ 
    HomeComponent,
    FacilityComponent,
    AboutComponent,
    ContactComponent,
    MainComponent,
    ResultsComponent,
    ResultPipe
  ]
})

export class MainModule { }