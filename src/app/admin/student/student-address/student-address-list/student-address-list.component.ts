import { Component, OnInit } from '@angular/core';
import { StudentAddressService } from '../student-address.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-student-address-list',
  templateUrl: './student-address-list.component.html',
  styleUrls: ['./student-address-list.component.css']
})
export class StudentAddressListComponent implements OnInit {

  public studentAddress=[];
  public grid:boolean;
  public listFilter:string;
  public user:string;
  public girl:string;
  public title='Student Address List';

  constructor(private _studentAddressService:StudentAddressService, private _router:Router,
    private _title:Title) {
    this.user='assets/user.png';
    this.girl='assets/girl.png';
   }
  //delete method code
  deleteStudentAddress(student_id:any, index:number){
    this._studentAddressService.deleteStudentAddress(student_id).subscribe(response=>{
      this.studentAddress.splice(index, 1);
    });
  }
//end

gridClick(){
  this.grid=true;
}

viewClick(){
  this.grid=false;
}

onClick(student_id:string){
this._router.navigate(['/admin/studentAddress-list-detail', student_id]);
}

  ngOnInit() {
      //get data from sql server
      this._studentAddressService.getStudentAddress()
      .subscribe((data)=>this.studentAddress=data);
    //end
    this.grid=true;

    //title code here
    this._title.setTitle(this.title);
  }

}
