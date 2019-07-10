import { Component, OnInit } from '@angular/core';
import { StudentFeeService } from '../student-fee.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-student-fee-list',
  templateUrl: './student-fee-list.component.html',
  styleUrls: ['./student-fee-list.component.css']
})
export class StudentFeeListComponent implements OnInit {

  public studentFeeList = [];
  public listFilter: string = '';
  public grid:boolean;
  public title='Student Fee List';
  public user:string;
  public girl:string;

  constructor(private _studentFeeService: StudentFeeService, private _router:Router,
    private _title:Title) {
    this.user='assets/user.png';
    this.girl='assets/girl.png';
   }

   //student fee list click
   onClick(student_id:any){
     this._router.navigate(['/admin/student-fee-list-detail', student_id]);
   }
   //end

   
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

  ngOnInit() {
    //get data from sql server
    this._studentFeeService.getStudentFee()
      .subscribe((data) => this.studentFeeList = data);
    //end

     //grid is open code first time
     this.grid=true;
     //end

     //title code here
     this._title.setTitle(this.title);
  }

  //delete method code
  deleteStudentFeeList(student_id: any, index: number) {
    this._studentFeeService.deleteStudentFee(student_id).subscribe(response => {
      this.studentFeeList.splice(index, 1);
    });
  }
//end

}
