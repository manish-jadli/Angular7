import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { ILogin } from './login';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  logindata:ILogin;
  loginData= [];
  public activatedLogin:boolean;
  public isLoginActive=false;
  public title='Login';


  constructor(private _router:Router, private _loginService:LoginService,
     private fb:FormBuilder, private route:ActivatedRoute,
     private _title:Title) {
   
   }



  ngOnInit() {
this.loginForm= this.fb.group({
  username:['',[Validators.required, Validators.maxLength(50)]],
  password: ['', [Validators.required, Validators.maxLength(8)]],
  IsActive: [false, [Validators.required]]
});

this.activatedLogin=false;

//get login data code
this._loginService.getLoginData()
.subscribe((data)=>this.loginData=data);
  //end

  //title code here
  this._title.setTitle(this.title);

  }


  onLogin(){
    console.log(this.loginForm.value);
  }

  confirmSubmit() {
    if(this.loginData){
      if (this.loginForm.value.username || this.loginCheck.values && this.loginForm.value.password && this.loginForm.value.IsActive) {
        alert('You have successfully submit the form.');
        this.activatedLogin=true;
        this._router.navigate(['/admin']);
        this.isLoginActive=true;
    }else{
    alert('Sorry, You have not fill form successfully. Please try again.');
    this._router.navigate(['/login/signup']);
  }
}
  }

  forgetPassword(){
    alert('Redirect to forget password screen.');
    this._router.navigate(['/login/profile']);
  }
  
//hard copy of  login data
 loginCheck=Object.assign({},this.loginData);
//end
}
