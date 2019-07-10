import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentAddressService } from '../../student-address.service';
import { IStudentAddress } from '../../../student';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-student-address-list-detail',
  templateUrl: './student-address-list-detail.component.html',
  styleUrls: ['./student-address-list-detail.component.css']
})
export class StudentAddressListDetailComponent implements OnInit {

  public studentAddress:any;
  public user:string;
  public girl:string;
  public title='Student Address List Detail';

  constructor(private route:ActivatedRoute, private _studentAddressService:StudentAddressService,
    private _title:Title) { 
    this.user='assets/user.png';
    this.girl='assets/girl.png';
  }

  ngOnInit() {
        //call by id base and show the data
this.route.params.forEach((params:Params)=>{
  this._studentAddressService.getStudentAddressId(params['student_id']).subscribe((studentAddress:IStudentAddress)=>{
    this.studentAddress=studentAddress;
  });
})
//end

//title code here
this._title.setTitle(this.title);
  }

}
