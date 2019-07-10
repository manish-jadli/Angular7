import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudentReportService } from './student-report.service';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'src/app/common/toastr.service';


@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css']
})
export class StudentReportComponent implements OnInit {
  studentReportForm: FormGroup;
  public studentReports = [];
  public title='Student Report';

  constructor(private _http: HttpClient, private _router: Router,
     private _studentReportService: StudentReportService,
      private fb: FormBuilder, private _title:Title, private toastr:ToastrService) { }

  //post data from sql server
  postStudentReport() {
    if(this.studentReportForm.valid){
      this._http.post(`http://localhost:56843/api/reports/`,
      {
        report_id: this.studentReportForm.value.report_id,
        student_id: this.studentReportForm.value.student_id,
        first_name: this.studentReportForm.value.first_name,
        middle_name: this.studentReportForm.value.middle_name,
        last_name: this.studentReportForm.value.last_name,
        gender: this.studentReportForm.value.gender,
        date_created: this.studentReportForm.value.date_created,
        report_content: this.studentReportForm.value.report_content,
        teacher_comments: this.studentReportForm.value.teacher_comments,
        other_report_details: this.studentReportForm.value.other_report_details,
        IsActive: this.studentReportForm.value.IsActive
      })
      .subscribe(
        (data: any) => {
          console.log(data)
        }
      )
    this.studentReportForm.reset();
    this.toastr.success('GIC KOTDWARA','Student report submitted successfully.');
    }else{
      this.toastr.error('GIC KOTDWARA','You are not filled correctly. Please try again later.');
    }

  }
  //end

  //update sql server code
  updateStudentReport() {
    if(this.studentReportForm.valid){
      this._http.put('http://localhost:56843/api/reports?report_id=' + this.studentReportForm.value.report_id,
      {
        report_id: this.studentReportForm.value.report_id,
        student_id: this.studentReportForm.value.student_id,
        first_name: this.studentReportForm.value.first_name,
        middle_name: this.studentReportForm.value.middle_name,
        last_name: this.studentReportForm.value.last_name,
        gender: this.studentReportForm.value.gender,
        date_created: this.studentReportForm.value.date_created,
        report_content: this.studentReportForm.value.report_content,
        teacher_comments: this.studentReportForm.value.teacher_comments,
        other_report_details: this.studentReportForm.value.other_report_details,
        IsActive: this.studentReportForm.value.IsActive
      })
      .subscribe(
        (data: any) => {
          console.log(data)
        }
      )
    this.studentReportForm.reset();
    this.toastr.success('GIC KOTDWARA','Student record updated successfully.');
    }else{
      this.toastr.error('GIC KOTDWARA','You have not filled correctly. Please try again later.');
    }
 
  }
  //end

  ngOnInit() {
    this.studentReportForm = this.fb.group({
      report_id: [''],
      student_id: [''],
      first_name: [''],
      middle_name: [''],
      last_name: [''],
      gender: [''],
      date_created: [''],
      report_content: [''],
      teacher_comments: [''],
      other_report_details: [''],
      IsActive: ['']
    })

    //get data from sql server
    this._studentReportService.getStudentReport()
      .subscribe((data) => this.studentReports = data);
    //end

    //title code here
    this._title.setTitle(this.title);
  }

  onLoadStudentReportDataClick() {
    this.studentReportForm.setValue({
      report_id: 'REP-ANU012345',
      student_id: 'ANU012345',
      first_name: 'Anushree',
      middle_name: '',
      last_name: 'Negi',
      gender:'Female',
      date_created: '07-05-2018',
      report_content: 'Good Student.',
      teacher_comments: 'Good Student.',
      other_report_details: 'No Detail',
      IsActive: 'True'
    })
  }

  viewStudentReport() {
    this._router.navigate(['/admin/student-report-list']);
  }
  onSubmit() {
    console.log(this.studentReportForm.value);
  }

}
