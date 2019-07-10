import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SchoolService } from './school.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  //active=['True','False'];
  schoolForm:FormGroup;
  public schools=[];
  public title='School';

  constructor(private _schoolService:SchoolService, private _router:Router,
     private _http:HttpClient, private _title:Title, private toastr:ToastrService) { }

  onLoadDataClick(){
    this.schoolForm.setValue({
      school_id:'GICKOTD012345',
      address_id:'KOTD012345',
      school_name:'GIC KOTDWARA',
      school_principal:'Dr. Yogesh Agarwal',
      other_school_details:'No Detail',
      IsActive:'True'
    })

  }

  onSubmit(){
    console.log(this.schoolForm.value);
  }

  ngOnInit() {
    this.schoolForm=new FormGroup({
      school_id:new FormControl(),
      address_id:new FormControl(),
      school_name:new FormControl(),
      school_principal:new FormControl(),
      other_school_details:new FormControl(),
      IsActive:new FormControl()
    })
    
        //get data from sql server
        this._schoolService.getSchool()
        .subscribe((data)=>this.schools=data);
      //end

      //title code here
      this._title.setTitle(this.title);
  }
  
   //post data from sql server
   postSchool(){
     if(this.schoolForm.valid){
      this._http.post(`http://localhost:56843/api/schools/`,
      {
         school_id:this.schoolForm.value.school_id,
         address_id:this.schoolForm.value.address_id,
         school_name:this.schoolForm.value.school_name,
         school_principal:this.schoolForm.value.school_principal,
         other_school_details:this.schoolForm.value.other_school_details,
         IsActive:this.schoolForm.value.IsActive
      })
      .subscribe(
        (data:any)=> {
          console.log(data)
        }
      )
      this.schoolForm.reset();
      this.toastr.success('GIC KOTDWARA','School form Successfully.');
     }else{
      this.toastr.error('GIC KOTDWARA','You are not filled correctly. Please try again later.');
     }
  
  //  this._router.navigate(['/school-list']);
  }
  //end

  //update sql server code
  update(){
    if(this.schoolForm.valid){
      this._http.put('http://localhost:56843/api/schools?school_id=' + this.schoolForm.value.school_id,
      {
         school_id:this.schoolForm.value.school_id,
         address_id:this.schoolForm.value.address_id,
         school_name:this.schoolForm.value.school_name,
         school_principal:this.schoolForm.value.school_principal,
         other_school_details:this.schoolForm.value.other_school_details,
         IsActive:this.schoolForm.value.IsActive
      })
      .subscribe(
        (data:any)=> {
          console.log(data)
        }
      )
      this.schoolForm.reset();
      this.toastr.success('GIC KOTDWARA','School updated Successfully.');
    }else{
      this.toastr.error('GIC KOTDWARA','You are not filled correctly. Please try again later.');
    }
   
  }
  //end

  //view school routing
  viewSchool(){
    this._router.navigate(['/admin/school-list']);
  }
  //end

}
