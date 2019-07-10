import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISubject } from './subject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  //baseURL code here
 private baseURL:string='http://localhost:56843/api/';
 //end

 //get data from sql server
 getSubject():Observable<ISubject[]>{
   return this._http.get<ISubject[]>(this.baseURL + 'subjects');
 }
 //end

  //get data by id base code
  getSubjectId(subject_id:any):Observable<ISubject>{
    return this._http.get<ISubject>('http://localhost:56843/api/subjects?subject_id=' +`${subject_id}`)
  }


 //delete data from sql server
 deleteSubject(subject_id:any){
   return this._http.delete('http://localhost:56843/api/subjects?subject_id=' +`${subject_id}`)
 }
 //end


 constructor(private _http:HttpClient) { }
}
