import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, CanDeactivate } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor(private  router:Router) { }

  CanActivate(route:ActivatedRouteSnapshot):boolean{
  let login_id=+route.url[1].path;
  if(isNaN(login_id) || login_id<1){
    alert('Invalid Product Id');
  //start a new navigation to redirect to list page
  this.router.navigate(['/login']);
  //abort current navigation
  return false;
  };
  return true;
}
}

@Injectable()
export class loginEditGuard implements CanDeactivate<SignupComponent>{
  canDeactivate(component:SignupComponent):boolean{
    if(component.signupForm.dirty){
      let username=component.signupForm.get('username').value || "New Product";
      return confirm(`Navigate away and lose all changes to ${username}?`);
    }
    return true;
  }
}
