import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { ISchool } from '../school';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  public schools = [];
  public listFilter: string = '';
  public grid:boolean;
  public title='School List';

  constructor(private _schoolService:SchoolService, private _router:Router,
    private _title:Title) { }

  ngOnInit() {
           //get data from sql server
           this._schoolService.getSchool()
           .subscribe((data)=>this.schools=data);
         //end

    this.grid=true;

    //title code here
    this._title.setTitle(this.title);
  }

    //grid code here
    gridClick(){
      this.grid=true;
    }
    //end
    
    //view code here
    viewClick(){
      this.grid=false;
    }
    //end

        //delete method code
        deleteSchool(school_id:any, index:number){
          this._schoolService.deleteSchool(school_id).subscribe(response=>{
            this.schools.splice(index, 1);
          });
        }
    //end

  getSchoolId(school_id: string) {
   this._router.navigate(['/admin/school-list-detail', school_id]);
  }

}
