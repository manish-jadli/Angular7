import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';


const appRoutes: Routes = [
  {path: 'admin', loadChildren: 'src/app/admin/admin.module#AdminModule'},
  {path: '', loadChildren: 'src/app/home/main.module#MainModule'},
  {path: 'login', loadChildren: 'src/app/login/login.module#LoginModule'},
  {path: '404', component: ErrorPageComponent},
  {path: '**', component: ErrorPageComponent}

];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
