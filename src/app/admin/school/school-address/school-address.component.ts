import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SchoolAddressService } from './school-address.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-school-address',
  templateUrl: './school-address.component.html',
  styleUrls: ['./school-address.component.css']
})
export class SchoolAddressComponent implements OnInit {

  public schoolAddress = [];
  schoolAddressForm: FormGroup;
  public title = 'School Address';

  constructor(private _schoolAddressService: SchoolAddressService, private _http: HttpClient,
     private _router: Router, private _title: Title, private toastr: ToastrService) { }

  ngOnInit() {
    this.schoolAddressForm = new FormGroup({
      address_id: new FormControl(),
      school_name: new FormControl(),
      img: new FormControl(),
      address_detail: new FormControl(),
      IsActive: new FormControl()
    });

     //get data from sql server
     this._schoolAddressService.getSchoolAddress()
     .subscribe((data) => this.schoolAddress = data);
   //end

   //title code here
    this._title.setTitle(this.title);
  }

   //post data from sql server
   postSchoolAddress(){
     if (this.schoolAddressForm.valid){
      this._http.post(`http://localhost:56843/api/schoolAddress/`,
      {
        address_id: this.schoolAddressForm.value.address_id,
        school_name: this.schoolAddressForm.value.school_name,
        address_detail: this.schoolAddressForm.value.address_detail,
        img: this.schoolAddressForm.value.img,
        IsActive: this.schoolAddressForm.value.IsActive
      })
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      );
      this.schoolAddressForm.reset();
      this.toastr.success('GIC KOTDWARA', 'School address form Successfully.');
     }else{
      this.toastr.success('GIC KOTDWARA', 'You are not filled correctly. Please try again later.');
     }
  }
  //end

  //update sql server code
  updateSchoolAddress(){
    if (this.schoolAddressForm.valid){
      this._http.put('http://localhost:56843/api/schoolAddress?address_id=' + this.schoolAddressForm.value.address_id,
      {
        address_id: this.schoolAddressForm.value.address_id,
        school_name: this.schoolAddressForm.value.school_name,
        img: this.schoolAddressForm.value.img,
         address_detail: this.schoolAddressForm.value.address_detail,
         IsActive: this.schoolAddressForm.value.IsActive
      })
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      );
      this.schoolAddressForm.reset();
      this.toastr.success('GIC KOTDWARA', 'School address updated Successfully.');
    } else{
      this.toastr.success('GIC KOTDWARA', 'You are not filled correctly. Please try again later.');
    }
  }
  //end

  onLoadSchoolAddressDataClick(){
    this.schoolAddressForm.setValue({
      address_id: 'CONVT012345',
      school_name: 'St. Joseph Convent public school',
      img: 'assets/schoolImg/balb.jpg',
      address_detail: 'Kotdwara',
      IsActive: 'True'
    });
  }

  viewSchoolAddress(){
    this._router.navigate(['/admin/school-address-list']);
  }

  onSubmit(){
    console.log(this.schoolAddressForm.value);
  }

}
