import { Component, OnInit } from '@angular/core';
import { ISubject } from '../subject';
import { HttpClient } from '@angular/common/http';
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subject:ISubject[];
  public title='Subject List';

 ngOnInit():void{
   //title code here
   this._title.setTitle(this.title);
 }

   //call by id base routing
  //  onClick(student_id:string){
  //   this._router.navigate(['/admin/list-student-detail', student_id]);
  // }
  //end

   //delete method code
   delete(subject_id:any, index:number){
    this._subjectService.deleteSubject(subject_id).subscribe(response=>{
      this.subject.splice(index, 1);
    });
  }
//end

 constructor(private _http:HttpClient, private _subjectService:SubjectService,
   private _router:Router, private _title:Title) { 
       //get data from sql server
       this._subjectService.getSubject()
       .subscribe((data)=>this.subject=data);
     //end
 }
}
