import { Injectable } from '@angular/core';
import { ILogin } from './login';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //baseURL code here
  private baseURL:string='http://localhost:56843/api/';
  //end

  private handleError(errorResponse:HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.error('Client side error', errorResponse.error.message);
    }else{
      console.error('Serer side error', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it.');
  }

  //get data from sql server
  getLoginData():Observable<ILogin[]>{
    return this._http.get<ILogin[]>(this.baseURL + 'login')
  }
  //end



  //edit code
  // getLoginId(login_id:string):Observable<ILogin>{
  //   return this._http.get<ILogin>(`${this.baseURL + 'login'}/${login_id}`)
  //   .pipe(catchError(this.handleError));
  // }
  //end




  //delete data from sql server
  // deleteLogin(login_id:any){
  //   return this._http.delete('http://localhost:56843/api/login?login_id=' +`${login_id}`)
  // }
  //end

//     getLoginData():ILogin[]{
//   return [
//     { login_id:'1',username:'manish jadli',date_of_birth:'01-01-1991',email:'manishjadli12@gmail.com',mobileNo:'9045571092',password:'12345',confirm_password:'12345',IsActive:true, check:true,phone:'',notification:''},
//     { login_id: '2', username: 'harish jadli', date_of_birth: '05-01-1993', email: 'harishjadli69@gmail.com', mobileNo: '9917894970', password: '12345', confirm_password: '12345', IsActive: true, check: false, phone: '', notification: ''},
//     { login_id: '3', username: 'girish jadli', date_of_birth: '02-10-1987', email: 'girishjadli12@gmail.com', mobileNo: '9557181875', password: '12345', confirm_password: '12345', IsActive: true, check: false, phone: '', notification: ''}
// ];
// }

constructor(private _http:HttpClient) { }
}
