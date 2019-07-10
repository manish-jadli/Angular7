import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentFeeService } from '../../student-fee.service';
import { IStudentFee } from '../../student-fee';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-student-fee-list-detail',
  templateUrl: './student-fee-list-detail.component.html',
  styleUrls: ['./student-fee-list-detail.component.css']
})
export class StudentFeeListDetailComponent implements OnInit {

  public user:string;
  public girl:string;
  public title='Student Fee List Detail';
  public studentListDetail:any;

  constructor(private route:ActivatedRoute, private _studentFeeService:StudentFeeService,
    private _title:Title) {
    this.user='assets/user.png';
    this.girl='assets/girl.png';
   }

  ngOnInit() {
    //call by id base and show the data
this.route.params.forEach((params:Params)=>{
  this._studentFeeService.getStudentFeeId(params['student_id']).subscribe((studentListDetail:IStudentFee)=>{
    this.studentListDetail=studentListDetail;
  });
})
//end

//title code here
this._title.setTitle(this.title);
}

}