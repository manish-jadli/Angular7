import { Component, OnInit } from '@angular/core';
import { StudentClassService } from '../student-class.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-student-class-list',
  templateUrl: './student-class-list.component.html',
  styleUrls: ['./student-class-list.component.css']
})
export class StudentClassListComponent implements OnInit {

  public studentsClass = [];
  public user: string;
  public girl: string;
  public listFilter:string='';
  public grid:boolean;
  public title='Student Class List';

  constructor(private _studentClassService: StudentClassService, private _router:Router,
    private _title:Title) {

    this.user = 'assets/user.png';
    this.girl = 'assets/girl.png';

   }

   //click by id base open
   onClick(student_id:any){
     this._router.navigate(['/admin/studentClass-list-detail', student_id]);
   }

   //end

       //delete method code
       deleteStudent(student_id:any, index:number){
        this._studentClassService.deleteStudentClass(student_id).subscribe(response=>{
          this.studentsClass.splice(index, 1);
        });
      }
      //end
      gridClick(){
        this.grid=true;
      }
      viewClick(){
        this.grid=false;
      }

  ngOnInit() {
         //get data from sql server
         this._studentClassService.getStudentClass()
         .subscribe((data)=>this.studentsClass=data);
       //end

    this.grid=true;

    //title code here
    this._title.setTitle(this.title);
  }

}
