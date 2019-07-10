import { Injectable } from '@angular/core';
import { IStudent } from './student';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {


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
  getStudent():Observable<IStudent[]>{
    return this._http.get<IStudent[]>(this.baseURL + 'students')
  }
  //end


  //call by id base code
  getStudentId(student_id:any):Observable<IStudent>{
     return this._http.get<IStudent>('http://localhost:56843/api/students?student_id=' +`${student_id}`)
   }
  //end

  
  //delete data from sql server
  deleteStudent(student_id:any){
    return this._http.delete('http://localhost:56843/api/students?student_id=' +`${student_id}`)
  }
  //end


  constructor(private _http:HttpClient) { }
}
