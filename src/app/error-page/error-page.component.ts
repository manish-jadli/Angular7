import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  public title='Page not found';

  constructor(private _title:Title) { }

  ngOnInit() {
    //title code here
    this._title.setTitle(this.title);
  }

}
