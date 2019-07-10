import { Component, OnInit } from '@angular/core';
import { StudentReportService } from '../student-report.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-student-report-list',
  templateUrl: './student-report-list.component.html',
  styleUrls: ['./student-report-list.component.css']
})
export class StudentReportListComponent implements OnInit {

  public studentReports = [];
  public listFilter:string='';
  public user: string;
  public girl: string;
  public grid:boolean;
  public title='Student Report List';

  constructor(private _studentReportService: StudentReportService, private _router:Router,
    private _title:Title) {
    this.user = 'assets/user.png';
    this.girl = 'assets/girl.png';

  }

  ngOnInit() {

     //get data from sql server
     this._studentReportService.getStudentReport()
     .subscribe((data)=>this.studentReports=data);
   //end

    this.grid=true;

    //title code here
    this._title.setTitle(this.title);
  }

    //grid code here
    gridClick(){
      this.grid=true;
    }
    //end
    
    //view code here
    viewClick(){
      this.grid=false;
    }
    //end

      //call by id base routing
  onClick(report_id:any){
    this._router.navigate(['/admin/student-report-list-detail', report_id]);
  }
  //end

     //delete method code
     delete(report_id:any, index:number){
      this._studentReportService.deleteStudentReport(report_id).subscribe(response=>{
        this.studentReports.splice(index, 1);
      });
    }
  //end

}
