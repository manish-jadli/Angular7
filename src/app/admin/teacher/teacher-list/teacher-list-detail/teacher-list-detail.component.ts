import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TeacherService } from '../../teacher.service';
import { ITeacher } from '../../tacher';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-teacher-list-detail',
  templateUrl: './teacher-list-detail.component.html',
  styleUrls: ['./teacher-list-detail.component.css']
})
export class TeacherListDetailComponent implements OnInit {

  public user: string;
  public girl: string;
  public title='Title List Detail';
  public teacher: any;

  constructor(private route: ActivatedRoute, private _teacherService:TeacherService,
    private _title:Title) {
    this.user = 'assets/user.png';
    this.girl = 'assets/girl.png';

  }

  ngOnInit() {
   //call by id base and show the data
   this.route.params.forEach((params:Params)=>{
    this._teacherService.getTeacherId(params['teacher_id']).subscribe((teacher:ITeacher)=>{
      this.teacher=teacher;
    })
    })
    //end

    //title code here
    this._title.setTitle(this.title);
  }

}
