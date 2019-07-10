import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from './student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';
import { IStudent } from './student';
import { ToastrService } from 'src/app/common/toastr.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  public studentForm:FormGroup;
 isDirty:boolean=true;
 datePickerConfig:Partial<BsDatepickerConfig>
 public students=[];
 public studentData:IStudent[]=[];
 public title='Create Student';


  constructor(private _studentService:StudentService, private fb:FormBuilder, private _router:Router, private _http:HttpClient,
      private _route:ActivatedRoute,private toastr:ToastrService,
      private _title:Title) {
    this.datePickerConfig=Object.assign({},
      {
        containerClass:'theme-dark-blue',
        showWeekNumbers:false,
        dateInputFormat:'DD/MM/YYYY'
    });
   }


  ngOnInit() {
    this.studentForm=this.fb.group({
      student_id:[''],
      date_of_birth:[''],
      other_student_details:[''],
      class_code:[''],
      IsActive:[''],

      //create skill form group
        first_name:[''],
        middle_name:[''],
        last_name:[''],
        gender: [''],
        father_name:[''],
        mother_name:[''],
        admission_on:[''],
        school_name:[''],
        mobile_no:[''],
        address:['']
    });

//get data from sql server directly
   this._studentService.getStudent()
   .subscribe((data)=>this.studentData=data)
//end

//title code here
this._title.setTitle(this.title);
  }
  //end


  //post data from sql server
  postStudent(){
    if(this.studentForm.valid){
      this._http.post(`http://localhost:56843/api/students/`,
      {
         student_id:this.studentForm.value.student_id,
        date_of_birth:this.studentForm.value.date_of_birth,
        other_student_details:this.studentForm.value.other_student_details,
        class_code:this.studentForm.value.class_code,
        IsActive:this.studentForm.value.IsActive,
          first_name:this.studentForm.value.first_name,
          middle_name:this.studentForm.value.middle_name,
          last_name:this.studentForm.value.last_name,
          gender:this.studentForm.value.gender,
          father_name:this.studentForm.value.father_name,
          mother_name:this.studentForm.value.mother_name,
          admission_on:this.studentForm.value.admission_on,
          school_name:this.studentForm.value.school_name,
          mobile_no:this.studentForm.value.mobile_no,
          address:this.studentForm.value.address
      }
      )
      .subscribe(
        (data:any)=> {
          console.log(data)
        }
      );
      this.toastr.success('GIC KOTDWARA','Created a student record successfully.');
      this.studentForm.reset();
    }else{
      this.toastr.error('GIC KOTDWARA','Please fill all the form correctly.');
    }



  }

  // updateStudent code
  update(){
    if(this.studentForm.valid){
      this._http.put('http://localhost:56843/api/students?student_id='+ this.studentForm.value.student_id,
      {
        student_id:this.studentForm.value.student_id,
       date_of_birth:this.studentForm.value.date_of_birth,
       other_student_details:this.studentForm.value.other_student_details,
       class_code:this.studentForm.value.class_code,
       IsActive:this.studentForm.value.IsActive,
         first_name:this.studentForm.value.first_name,
         middle_name:this.studentForm.value.middle_name,
         last_name:this.studentForm.value.last_name,
         gender:this.studentForm.value.gender,
         father_name:this.studentForm.value.father_name,
         mother_name:this.studentForm.value.mother_name,
         admission_on:this.studentForm.value.admission_on,
         school_name:this.studentForm.value.school_name,
         mobile_no:this.studentForm.value.mobile_no,
         address:this.studentForm.value.address
     })
     .subscribe(
       (data:any)=> {
         console.log(data)
       }
     );
     this.toastr.success('GIC KOTDWARA','Updated student record successfully.');
     this.studentForm.reset();
    }else{
      this.toastr.error('GIC KOTDWARA','You fill wrong information. Please try again later.');
    }

  }
    //end

    //delete method code
    deleteStudent(student_id:any, index:number){
      this._studentService.deleteStudent(student_id).subscribe(response=>{
        this.students.splice(index, 1);
      });
      this.toastr.success('Deleted student record successfully.');
    }
//end

//view studenet detail
viewStudent(){
this._router.navigate(['/admin/list-student']);
};

//end

  onLoadDataClick():void{
    this.studentForm.setValue({
      student_id:'Manish Jadli',
      date_of_birth:'01/01/1991',
      other_student_details:'No detail',
      class_code:'TWE012345',
      IsActive:true,
        first_name:'Manish',
        middle_name:'',
        last_name:'Jadli',
        gender:'Male',
        father_name:'Panchram Jadli',
        mother_name:'Madhuri Devi',
        admission_on:'7-july-2010',
        school_name:'GIC Kotdwara',
        mobile_no:'9045571092',
        address:'Kotdwara'
    })
  }


   onSubmit(){
     console.log(this.studentForm.value)
  }

  public schoolLists=[
    {id:1, name:'GIC Kotdwara', active:true},
    {id:2, name:'GIC Sukhro', active:true},
    {id:3, name:'GIC Motahank', active:true},
    {id:4, name:'GIC Kishanpuri', active:true},
    {id:5, name:'GGIC Ghamandpur', active:true},
    {id:6, name:'GIC Sattichaur', active:true},
    {id:7, name:'GIC Mawakot', active:true},
    {id:8, name:'GIC Durgapuri', active:true},
    {id:9, name:'GIC Kalalghati', active:true},
    {id:10, name:'GIC Kotdwara', active:true},
    {id:11, name:'S.G.R.R Public School', active:true},
    {id:12, name:'Mother Land Public School', active:true},
    {id:13, name:'Gyan Bharti Public School', active:true},
    {id:14, name:'Bal Bharti Public School', active:true},
    {id:15, name:'Bluing Whale Public School', active:true},
    {id:16, name:'St. Joseph Convent Public School', active:true},
    {id:17, name:'A.V.N Karnvaghati', active:true},
    {id:18, name:'D.A.V Public School', active:true},
    {id:19, name:'Kendriya Vidhyala Public School', active:true},
    {id:20, name:'Cradle Public School', active:true},
    {id:21, name:'M.K.V.N Public School', active:true},
    {id:22, name:'Navyug Public School', active:true},
    {id:23, name:'Hayde Public School', active:true},
    {id:24, name:'Army Public School', active:true},
    {id:25, name:'The Daffodils Public School', active:true},
    {id:26, name:'Happy Home Public School', active:true}
  ];


}
