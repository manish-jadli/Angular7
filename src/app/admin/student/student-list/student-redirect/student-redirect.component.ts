import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IStudent } from '../../student';
import { StudentService } from '../../student.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-student-redirect',
  templateUrl: './student-redirect.component.html',
  styleUrls: ['./student-redirect.component.css']
})
export class StudentRedirectComponent implements OnInit {

  public user:string;
  public girl:string;
  public students:any;
  public title='Student List Detail';

  constructor(private route:ActivatedRoute, private _studentService:StudentService,
    private _title:Title) {
    this.user='assets/user.png';
    this.girl='assets/girl.png';
     }

  ngOnInit() {
//call by id base and show the data
this.route.params.forEach((params:Params)=>{
  this._studentService.getStudentId(params['student_id']).subscribe((students:IStudent)=>{
    this.students=students;
  });
})
//end

//title code here
this._title.setTitle(this.title);
  }

}

