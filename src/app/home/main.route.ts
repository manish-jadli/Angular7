import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { FacilityComponent } from './facility/facility.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResultsComponent } from './results/results.component';

export const mainRoutes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'facility', component:FacilityComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'result', component:ResultsComponent}
];
