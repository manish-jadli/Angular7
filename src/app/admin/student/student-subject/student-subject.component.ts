import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SubjectService } from './subject.service';
import { ISubject } from './subject';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-student-subject',
  templateUrl: './student-subject.component.html',
  styleUrls: ['./student-subject.component.css']
})
export class StudentSubjectComponent implements OnInit {

  subjectForm:FormGroup;
  subject:ISubject[];
  public title='Subject';

  constructor(private _subjectService: SubjectService, private _http: HttpClient,
     private _router: Router, private fb: FormBuilder,
     private _title:Title, private toastr:ToastrService) {
       //get data from sql server
       this._subjectService.getSubject()
       .subscribe((data)=>this.subject=data);
     //end
   }

 
  //post data from sql server
  postSubject(){
    if(this.subjectForm.valid){
      this._http.post(`http://localhost:56843/api/subjects/`,
      {
         subject_id:this.subjectForm.value.subject_id,
         subject_name:this.subjectForm.value.subject_name,
         IsActive:this.subjectForm.value.IsActive
  
      })
      .subscribe(
        (data:any)=> {
          console.log(data)
        }
      )
      this.subjectForm.reset();
      this.toastr.success('GIC KOTDWARA','Subject submitted successfully.');
    }else{
      this.toastr.error('GIC KOTDWARA','You are not filled correcty. Pleaset try again later.');
    }
   
  
  }

  // updateStudent code
  updateSubject(){
    if(this.subjectForm.valid){
      this._http.put('http://localhost:56843/api/subjects?subject_id='+ this.subjectForm.value.subject_id,
      {
        subject_id:this.subjectForm.value.subject_id,
        subject_name:this.subjectForm.value.subject_name,
        IsActive:this.subjectForm.value.IsActive
    
     })
     .subscribe(
       (data:any)=> {
         console.log(data)
       }
     )
     this.subjectForm.reset();
     this.toastr.success('GIC KOTDWARA','Subject are updated successfully. Pleaset try again later.');
    }else{
      this.toastr.error('GIC KOTDWARA','Subject are not updated correcty. Pleaset try again later.');
    }

  }
    //end

    //delete method code
    deleteSubject(subject_id:any, index:number){
      this._subjectService.deleteSubject(subject_id).subscribe(response=>{
        this.subject.splice(index, 1);
      });
      this.toastr.success('GIC KOTDWARA','Deleted subject record Successfully.');
    }
    //end

    viewSubject(){
      this._router.navigate(['/admin/subject-list']);
    }

  ngOnInit() {
    this.subjectForm = this.fb.group({
      subject_id:[''],
      subject_name:[''],
      IsActive:['']
    })

    //title code here
    this._title.setTitle(this.title);
  }

  onLoadSubjectDataClick():void{
    this.subjectForm.setValue({
      subject_id:'HIN012345',
      subject_name:'Hindi',
      IsActive:'True'
    })
  }
  onSubmit():void{
    console.log(this.subjectForm.value);
  }

}
