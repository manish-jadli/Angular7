import { Injectable } from '@angular/core';
import { ISchoolAddress } from './school-address';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolAddressService {
 //baseURL code here
 private baseURL:string='http://localhost:56843/api/';
 //end

 //get data from sql server
 getSchoolAddress():Observable<ISchoolAddress[]>{
   return this._http.get<ISchoolAddress[]>(this.baseURL + 'schoolAddress');
 }
 //end

 //get data by id base from sql server
 getSchoolAddressId(address_id:any):Observable<ISchoolAddress>{
  return this._http.get<ISchoolAddress>('http://localhost:56843/api/schoolAddress?address_id=' +`${address_id}`)
}
 //end


 //delete data form sql server
 deleteSchoolAddress(address_id:any){
  return this._http.delete('http://localhost:56843/api/schoolAddress?address_id=' +`${address_id}`)
}
 //end
 constructor(private _http:HttpClient){}
}
