import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudentClass } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentClassService {

  //baseURL code here
 private baseURL:string='http://localhost:56843/api/';
 //end

 //get data from sql server
 getStudentClass():Observable<IStudentClass[]>{
   return this._http.get<IStudentClass[]>(this.baseURL + 'class');
 }
 //end

 //update data from sql server
//  updateStudentClass(student_id):Observable<IStudentClass[]>{
//    return this._http.get<IStudentClass[]>(this.baseURL + 'class_id').pipe((res=>{
//      return res;
//    }));
//    }
 //end

 //get data by id base from sql server
 getStudentClassId(student_id:any):Observable<IStudentClass>{
  return this._http.get<IStudentClass>('http://localhost:56843/api/class?student_id=' +`${student_id}`)
}
 //end

 //delete data from sql server
 deleteStudentClass(student_id:any){
   return this._http.delete('http://localhost:56843/api/class?student_id=' +`${student_id}`)
 }
 //end


  constructor(private _http:HttpClient) { }
}
