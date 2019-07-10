import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentClassService } from '../../student-class.service';
import { IStudentClass } from '../../../student';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-student-class-list-detail',
  templateUrl: './student-class-list-detail.component.html',
  styleUrls: ['./student-class-list-detail.component.css']
})
export class StudentClassListDetailComponent implements OnInit {

  public user: string;
  public girl: string;
  public studentListDetail: any;
  public title='Student Class List Detail';


  constructor(private route: ActivatedRoute, private _studentClassService:StudentClassService,
    private _title:Title) {
    this.user = 'assets/user.png';
    this.girl = 'assets/girl.png';

  }

  ngOnInit() {
    //call by id base and show the data
    this.route.params.forEach((params:Params)=>{
      this._studentClassService.getStudentClassId(params['student_id']).subscribe((studentListDetail:IStudentClass)=>{
        this.studentListDetail=studentListDetail;
      })
    })
    //end

    //title code here
    this._title.setTitle(this.title);
  }

}
