import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // signup:ILogin[];
  public title ='SignUp';

  signupForm:FormGroup;

  constructor(private _router: Router, private route: ActivatedRoute,
     private fb: FormBuilder, private _loginService: LoginService,
     private _http:HttpClient, private _title:Title) { 
  }

  public roles=[
    {id:1, role:'Master Admin', active:true},
    {id:2, role:'Admin', active:true},
    {id:3, role:'Staff', active:true},
    {id:4, role:'User', active:true},
    {id:5, role:'Manager', active:true},
  ];


  ngOnInit() {
    this.signupForm = this.fb.group({
      login_id:['',[Validators.required]],
      username: ['', [Validators.required]],
      role:['',[Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      IsActive:['']
});


  //title changed code
  this._title.setTitle(this.title);

  }
  

  onSignup(){
    console.log(this.signupForm.value);
  }

  // confirmSubmit(){
  //   if(this.signupForm.value.username && this.signupForm.value.email && this.signupForm.value.password && this.signupForm.value.confirm_password){
  //     alert('You have successfully submit the signup form.');
  //     this._rotuer.navigate(['/login']);
  //   }else{
  //     alert('Sorry, You have not fill form correctly. Please try again.');
  //   }
  // }

    //post data from sql server
    postSignup(){
      this._http.post(`http://localhost:56843/api/login/`,
      {
        login_id:this.signupForm.value.login_id,
        username:this.signupForm.value.username,
        role:this.signupForm.value.role,
        email:this.signupForm.value.email,
        password:this.signupForm.value.password,
        confirm_password:this.signupForm.value.confirm_password,
        IsActive:this.signupForm.value.IsActive
      })
      .subscribe(
        (data:any)=> {
          console.log(data)
        }
      )
      //this.signupForm.reset();
    }
    //end


}
