import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TeacherService } from './teacher.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  //active=['True','False'];
  teacherForm:FormGroup;
  public teachers=[]
  public title='Teacher';

  constructor(private _teacherService:TeacherService, private _router:Router,
     private _http:HttpClient, private _title:Title, private toastr:ToastrService) { }

  ngOnInit() {
    this.teacherForm=new FormGroup({
      teacher_id:new FormControl(),
      school_id:new FormControl(),
      gender:new FormControl(),
      first_name:new FormControl(),
      middle_name:new FormControl(),
      last_name:new FormControl(),
      other_teacher_details:new FormControl(),
      IsActive:new FormControl()
    })
  //get data from sql server
  this._teacherService.getTeacher()
  .subscribe((data)=>this.teachers=data);
//end

//title code here
    this._title.setTitle(this.title);
  }

  //post data from sql server
  postTeacher(){
    if(this.teacherForm.valid){
      this._http.post(`http://localhost:56843/api/teachers/`,
      {
         teacher_id:this.teacherForm.value.teacher_id,
        school_id:this.teacherForm.value.school_id,
        gender:this.teacherForm.value.gender,
        first_name:this.teacherForm.value.first_name,
        middle_name:this.teacherForm.value.middle_name,
        last_name:this.teacherForm.value.last_name,
        other_teacher_details:this.teacherForm.value.other_teacher_details,
        IsActive:this.teacherForm.value.IsActive
  
      })
      .subscribe(
        (data:any)=> {
          console.log(data)
        }
      )
      this.teacherForm.reset();
      this.toastr.success('GIC KOTDWARA','Teacher form submitted Successfully.');
    }else{
      this.toastr.error('GIC KOTDWARA','You are not filled corrctly. Please try again later.');
    }
  }
  //end

  //update sql server code
  update(){
    if(this.teacherForm.valid){
      this._http.put('http://localhost:56843/api/teachers?teacher_id=' + this.teacherForm.value.teacher_id,
      {
         teacher_id:this.teacherForm.value.teacher_id,
        school_id:this.teacherForm.value.school_id,
        gender:this.teacherForm.value.gender,
        first_name:this.teacherForm.value.first_name,
        middle_name:this.teacherForm.value.middle_name,
        last_name:this.teacherForm.value.last_name,
        other_teacher_details:this.teacherForm.value.other_teacher_details,
        IsActive:this.teacherForm.value.IsActive
  
      })
      .subscribe(
        (data:any)=> {
          console.log(data)
        }
      )
      this.toastr.success('GIC KOTDWARA','Teacher form updated Successfully.');
    }else{
      this.toastr.error('GIC KOTDWARA','You are not filled corrctly. Please try again later.');
    }

  }
  //end

  onLoadDataClick(){
    this.teacherForm.setValue({
      teacher_id:'TWE_TEACH012345',
      school_id:'STU012345',
      gender:'Female',
      first_name:'Stuti',
      middle_name:'',
      last_name:'Duklan',
      other_teacher_details:'No Detail',
      IsActive:'True'
    })
  }

  viewTeacher(){
    this._router.navigate(['/admin/teacher-list']);
  }

  onSubmit(){
    console.log(this.teacherForm.value);
  }

}
