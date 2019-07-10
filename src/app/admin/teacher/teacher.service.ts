import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITeacher } from './tacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  
  //baseURL code here
 private baseURL:string='http://localhost:56843/api/';
 //end

 //get data from sql server
 getTeacher():Observable<ITeacher[]>{
   return this._http.get<ITeacher[]>(this.baseURL + 'teachers');
 }
 //end

  //get  data by id base form sql server
  getTeacherId(teacher_id:any):Observable<ITeacher>{
    return this._http.get<ITeacher>('http://localhost:56843/api/teachers?teacher_id=' +`${teacher_id}`)
  }

 //delete data form sql server
 deleteTeacher(teacher_id:any){
  return this._http.delete('http://localhost:56843/api/teachers?teacher_id=' +`${teacher_id}`)
}
 //end
  constructor( public _http:HttpClient) { }
}
