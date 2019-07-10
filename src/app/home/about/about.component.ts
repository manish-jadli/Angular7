import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public counter:number=0;
  public title='About';

  constructor(private _title:Title) { }

  voteIncrement(){
    this.counter++;
  }
  voteDecrement(){
    this.counter--;
  }

  ngOnInit() {
    //title code here
    this._title.setTitle(this.title);
  }

}
