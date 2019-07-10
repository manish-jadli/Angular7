import { Component, OnInit } from '@angular/core';
import { StudentClassService } from './student-class.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-student-class',
  templateUrl: './student-class.component.html',
  styleUrls: ['./student-class.component.css']
})
export class StudentClassComponent implements OnInit {
  //active=['True','False'];

  studentClassForm:FormGroup;
  public studentsClass=[];
  public title='Student Class';


  constructor(private _studentClassService:StudentClassService, private _router:Router,
     private _http:HttpClient, private _title:Title,  private toastr:ToastrService) { }

  ngOnInit() {
    this.studentClassForm=new FormGroup({
      student_id:new FormControl(),
      class_id:new FormControl(),
      date_from:new FormControl(),
      date_to:new FormControl(),
      IsActive:new FormControl()
    });

    //get data from sql server
   this._studentClassService.getStudentClass()
    .subscribe((data)=>this.studentsClass=data);

    //title code here
    this._title.setTitle(this.title);
  }
  //end
  //post data from sql server
  postStudentClass(){
    if(this.studentClassForm.valid){
      this._http.post(`http://localhost:56843/api/class/`,
      {
         student_id:this.studentClassForm.value.student_id,
        class_id:this.studentClassForm.value.class_id,
        date_from:this.studentClassForm.value.date_from,
        date_to:this.studentClassForm.value.date_to,
        IsActive:this.studentClassForm.value.IsActive
      })
      .subscribe(
        (data:any)=> {
          console.log(data)
        }
      )
      this.studentClassForm.reset();
      this.toastr.success('GIC KOTDWARA','Student class submitted Successfully.');
    }else{
      this.toastr.error('GIC KOTDWARA','You are not fill correctly. Please try again later.');
    }

  }


  update(){
    if(this.studentClassForm.valid){
      this._http.put('http://localhost:56843/api/class/?student_id='+ this.studentClassForm.value.student_id,
      {
         student_id:this.studentClassForm.value.student_id,
        class_id:this.studentClassForm.value.class_id,
        date_from:this.studentClassForm.value.date_from,
        date_to:this.studentClassForm.value.date_to,
        IsActive:this.studentClassForm.value.IsActive
      })
      .subscribe(
        (data:any)=> {
          console.log(data)
        }
      )
      this.studentClassForm.reset();
      this.toastr.success('GIC KOTDWARA','Student class updated Successfully.');
    }else{
      this.toastr.error('GIC KOTDWARA','You are not fill correctly. Please try again later.');
    }

  }
    //end

    //delete method code
    deleteStudent(student_id:any, index:number){
      this._studentClassService.deleteStudentClass(student_id).subscribe(response=>{
        this.studentsClass.splice(index, 1);
      });
      this.toastr.error('GIC KOTDWARA','Student class deleted Successfully.');
    }
//end

//refress method code
refresh():void{
  this.studentClassForm.setValue({
    student_id:'',
    class_id:'',
    date_from:'',
    date_to:'',
    IsActive:''
  })
};
//end

//view studenet detail
viewStudentClass(){
this._router.navigate(['/admin/studentClass-list']);
};

//end

  onLoadDataClick():void{
    //setvalue method
    this.studentClassForm.setValue({
      student_id:'Manish Jadli',
      class_id:'GRAD012345',
      date_from:'01/01/1991',
      date_to:'12/05/2000',
      IsActive:true
    })
  }


   onSubmitClass(){
     console.log(this.studentClassForm.value)
  }
  }

