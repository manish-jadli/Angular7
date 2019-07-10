import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profileImg:string;
  public listFilter:string;
  public title='Profile';

  constructor(private _router:Router, private _title:Title) {
    this.profileImg='assets/user.png';
   }
   onSubmit(){
     alert('Redirect to login screen.');
    this._router.navigate(['/login']);
   }

  ngOnInit() {
    //title code here
    this._title.setTitle(this.title);
  }

}
