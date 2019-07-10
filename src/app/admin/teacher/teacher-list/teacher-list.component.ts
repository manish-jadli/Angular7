import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  public teachers = [];
  public title='Teacher List';
  public listFilter: string = '';

  public user: string;
  public girl: string;
  public grid:boolean;

  constructor(private _teacherService: TeacherService,
     private _router:Router, private _title:Title) {

    this.user = 'assets/user.png';
    this.girl = 'assets/girl.png';

      //get data from sql server
  this._teacherService.getTeacher()
  .subscribe((data)=>this.teachers=data);
//end
  }

  ngOnInit() {
    this.grid=true;

    //title code here
    this._title.setTitle(this.title);
  }

  //id base routing code
  onClick(teacher_id:any){
    this._router.navigate(['/admin/teacher-list-detail', teacher_id]);
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
      //delete method code
      deleteStudent(teacher_id:any, index:number){
        this._teacherService.deleteTeacher(teacher_id).subscribe(response=>{
          this.teachers.splice(index, 1);
        });
      }
  //end

}
