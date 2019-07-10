import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TRANSLATION_PROVIDERS, TranslateService, TranslatePipe } from './translate';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { SelectRequiredValidatorDirective } from './shared/selectRequiredValidators.directive';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ToastrService } from './common/toastr.service';
import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectRequiredValidatorDirective,
    ErrorPageComponent,
    NavbarComponent,
    TranslatePipe
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [ToastrService, TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
