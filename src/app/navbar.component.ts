import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'schoolmanagement';

  public isLoginActive=true;

  public activatedLogin:boolean;

  constructor(private _router:Router) { }

  loginActive(){
    this.isLoginActive=false;
  }

  logout(){
    this._router.navigate(['/login']);
    this.isLoginActive=true;
  }
  ngOnInit(){
    
  }


}
