import { Injectable } from '@angular/core';
import { ISchool } from './school';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  //baseURL code here
  private baseURL:string='http://localhost:56843/api/';
  //end
 
  //get data from sql server
  getSchool():Observable<ISchool[]>{
    return this._http.get<ISchool[]>(this.baseURL + 'schools');
  }
  //end

  //get data by id base from sql server
  getSchoolId(school_id:any):Observable<ISchool>{
    return this._http.get<ISchool>('http://localhost:56843/api/schools?school_id=' +`${school_id}`)
  }
  //end
 
  //delete data form sql server
  deleteSchool(school_id:any){
   return this._http.delete('http://localhost:56843/api/schools?school_id=' +`${school_id}`)
 }
  //end
  


  constructor(private _http:HttpClient){}
}
