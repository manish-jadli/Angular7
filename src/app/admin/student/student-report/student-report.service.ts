import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudentReport } from './student-report';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentReportService {

    //baseURL code here
 private baseURL:string='http://localhost:56843/api/';
 //end

 //get data from sql server
 getStudentReport():Observable<IStudentReport[]>{
   return this._http.get<IStudentReport[]>(this.baseURL + 'reports');
 }
 //end

 //get data by id base code
 getStudentReportId(report_id:any):Observable<IStudentReport>{
   return this._http.get<IStudentReport>('http://localhost:56843/api/reports?report_id=' +`${report_id}`)
 }
 //end

 //delete data from sql server
 deleteStudentReport(report_id:any){
   return this._http.delete('http://localhost:56843/api/reports?report_id=' +`${report_id}`)
 }
 //end


 constructor(private _http:HttpClient) { }
}

