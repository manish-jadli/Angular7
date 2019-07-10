import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentAddressService } from './student-address.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-student-address',
  templateUrl: './student-address.component.html',
  styleUrls: ['./student-address.component.css']
})
export class StudentAddressComponent implements OnInit {
  //active=['True','False'];
  studentAddressForm:FormGroup;
  public studentAddress=[];
  public title='Student Address';

  constructor(private _studentAddressService:StudentAddressService, private _router:Router,
     private _http:HttpClient, private _title:Title, private toastr:ToastrService) { }

  ngOnInit() {
    this.studentAddressForm=new FormGroup({
      student_id:new FormControl(),
      address_id:new FormControl(),
      date_from:new FormControl(),
      address_details:new FormControl(),
      IsActive:new FormControl()
    })

     //get data from sql server
     this._studentAddressService.getStudentAddress()
     .subscribe((data)=>this.studentAddress=data);
   //end

   //title code here
   this._title.setTitle(this.title);
  }

    //post data from sql server
    postStudentAddress(){
      if(this.studentAddressForm.valid){
        this._http.post(`http://localhost:56843/api/studentAddress/`,
        {
           student_id:this.studentAddressForm.value.student_id,
           address_id:this.studentAddressForm.value.address_id,
          date_from:this.studentAddressForm.value.date_from,
          address_details:this.studentAddressForm.value.address_details,
          IsActive:this.studentAddressForm.value.IsActive
        })
        .subscribe(
          (data:any)=> {
            console.log(data)
          }
        )
        this.studentAddressForm.reset();
        this.toastr.error('GIC KOTDWARA','Student address submitted Successfully.');
      }else{
        this.toastr.error('GIC KOTDWARA','You are not filled correctly. Please try again later.');
      }
    }
    //end

    //update sql server data
    update(){
      if(this.studentAddressForm.valid){
        this._http.put('http://localhost:56843/api/studentAddress?student_id=' + this.studentAddressForm.value.student_id,
        {
           student_id:this.studentAddressForm.value.student_id,
           address_id:this.studentAddressForm.value.address_id,
          date_from:this.studentAddressForm.value.date_from,
          address_details:this.studentAddressForm.value.address_details,
          IsActive:this.studentAddressForm.value.IsActive
        })
        .subscribe(
          (data:any)=> {
            console.log(data)
          }
        )
        this.studentAddressForm.reset();
        this.toastr.error('GIC KOTDWARA','Student address record Successfully.');
      }else{
        this.toastr.error('GIC KOTDWARA','You are not filled correctly. Please try again later.');
      }

    }
    //end


    //end

  viewStudentAddress(){
    this._router.navigate(['/admin/studentAddress-list']);
  }


  onSubmitAddress(){
    console.log(this.studentAddressForm.value);
  }

}
