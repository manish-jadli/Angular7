import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ISchoolAddress } from '../../school-address';
import { SchoolAddressService } from '../../school-address.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-school-address-list-detail',
  templateUrl: './school-address-list-detail.component.html',
  styleUrls: ['./school-address-list-detail.component.css']
})
export class SchoolAddressListDetailComponent implements OnInit {

  public schoolAddress:any;
  public title='School Address List Detail';

  constructor(private route:ActivatedRoute, private _schoolAddressService:SchoolAddressService,
    private _title:Title) { }

  ngOnInit() {

    //call by id base and show the data
this.route.params.forEach((params:Params)=>{
  this._schoolAddressService.getSchoolAddressId(params['address_id']).subscribe((schoolAddress:ISchoolAddress)=>{
    this.schoolAddress=schoolAddress;
  });
})
//end

//title code here
this._title.setTitle(this.title);

  }


}
