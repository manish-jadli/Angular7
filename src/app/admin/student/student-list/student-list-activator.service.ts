import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { StudentService } from '../student.service';

@Injectable({
  providedIn: 'root'
})
export class StudentListActivatorService implements CanActivate {

  constructor(private _router:Router, private _studentService:StudentService) { }

  canActivate(route:ActivatedRouteSnapshot){
    const studentExists=!!this._studentService.getStudentId(route.params['student_id'])

    if(!studentExists)
    this._router.navigate(['/admin/404'])
    return studentExists
  }

}
