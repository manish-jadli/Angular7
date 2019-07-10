import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IStudentFee } from './student-fee';

@Injectable({
  providedIn: 'root'
})
export class StudentFeeService {

  //base url code here
  private baseURL: string = 'http://localhost:56843/api/';
  //end

  //get data from sql server
  getStudentFee(): Observable<IStudentFee[]> {
    return this._http.get<IStudentFee[]>(this.baseURL + 'PaymentFee');
  }
  //end

    //get data by id base code
    getStudentFeeId(student_id: any):Observable<IStudentFee> {
      return this._http.get<IStudentFee>('http://localhost:56843/api/PaymentFee?student_id=' + `${student_id}`)
    }
    //end

  //delete data from sql server
  deleteStudentFee(student_id: any) {
    return this._http.delete('http://localhost:56843/api/PaymentFee?student_id=' + `${student_id}`)
  }
  //end

  constructor(private _http: HttpClient) { }
}
