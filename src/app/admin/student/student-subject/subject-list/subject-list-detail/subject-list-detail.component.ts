import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-subject-list-detail',
  templateUrl: './subject-list-detail.component.html',
  styleUrls: ['./subject-list-detail.component.css']
})
export class SubjectListDetailComponent implements OnInit {

  public title='Subject List Detail';

  constructor(private _title:Title) { }

  ngOnInit() {
    //title code here
    this._title.setTitle(this.title);
  }

}
