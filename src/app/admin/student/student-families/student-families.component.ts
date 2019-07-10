import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-student-families',
  templateUrl: './student-families.component.html',
  styleUrls: ['./student-families.component.css']
})
export class StudentFamiliesComponent implements OnInit {

  public title='Student Families';

  constructor(private _title:Title) { }

  ngOnInit() {
    //title code here
    this._title.setTitle(this.title);
  }

}
