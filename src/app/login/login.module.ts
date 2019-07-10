import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { loginRoutes } from './login.route';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login.component';
import { ConfirmPasswordDirective } from '../shared/confirmPassword.directive';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(loginRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, SignupComponent,ConfirmPasswordDirective, ProfileComponent ]
})

export class LoginModule { }