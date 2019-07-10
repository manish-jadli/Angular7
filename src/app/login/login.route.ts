import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

export const loginRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'profile', component:ProfileComponent}
];
