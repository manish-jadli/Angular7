import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudentAddress } from '../student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentAddressService {

  
  //baseURL code here
 private baseURL:string='http://localhost:56843/api/';
 //end

 //get data from sql server
 getStudentAddress():Observable<IStudentAddress[]>{
   return this._http.get<IStudentAddress[]>(this.baseURL + 'studentAddress');
 }
 //end

 //update data from sql server
//  updateStudentAddress(student_id):Observable<IStudentAddress[]>{
//    return this._http.get<IStudentAddress[]>(this.baseURL + 'student_id').pipe((res=>{
//      return res;
//    }));
//    }
 //end

 //get data by id base from sql server
 getStudentAddressId(student_id:any):Observable<IStudentAddress>{
  return this._http.get<IStudentAddress>('http://localhost:56843/api/studentAddress?student_id=' +`${student_id}`)
}
 //end

 //delete data from sql server
 deleteStudentAddress(student_id:any){
   return this._http.delete('http://localhost:56843/api/studentAddress?student_id=' +`${student_id}`)
 }
 //end

  constructor(private _http:HttpClient) { }
}
