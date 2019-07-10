import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SchoolService } from '../../school.service';
import { ISchool } from '../../school';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-school-list-detail',
  templateUrl: './school-list-detail.component.html',
  styleUrls: ['./school-list-detail.component.css']
})
export class SchoolListDetailComponent implements OnInit {

  public schoolList:any;
  public title='School List Detail';

  constructor(private route:ActivatedRoute, private _schoolService:SchoolService,
    private _title:Title) { }

  ngOnInit() {
 //call by id base and show the data
    this.route.params.forEach((params:Params)=>{
    this._schoolService.getSchoolId(params['school_id']).subscribe((schoolList:ISchool)=>{
    this.schoolList=schoolList;
  });
})
//end

//title code here
this._title.setTitle(this.title);
  }

}
