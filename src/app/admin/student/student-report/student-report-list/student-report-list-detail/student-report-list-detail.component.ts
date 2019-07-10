import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentReportService } from '../../student-report.service';
import { IStudentReport } from '../../student-report';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-student-report-list-detail',
  templateUrl: './student-report-list-detail.component.html',
  styleUrls: ['./student-report-list-detail.component.css']
})
export class StudentReportListDetailComponent implements OnInit {

  public user: string;
  public girl: string;
  public studentReport:any;
  public title='Student Report List Detail';

  constructor(private route: ActivatedRoute, private _studentReportService:StudentReportService,
    private _title:Title) {
    this.user = 'assets/user.png';
    this.girl = 'assets/girl.png';
  }

  ngOnInit() {
//call by id base and show the data
this.route.params.forEach((params:Params)=>{
  this._studentReportService.getStudentReportId(params['report_id']).subscribe((studentReport:IStudentReport)=>{
    this.studentReport=studentReport;
  });
})
//end

//title code here
this._title.setTitle(this.title);
  }

}
