import { Component, OnInit } from '@angular/core';
import { ResultService } from './result.service';
import { IResult } from './result';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public resultDataAll:IResult[]=[];
  public title='Result';
  resultCheck:boolean;


  constructor(private _resultServie:ResultService, private _title:Title) { }

  results(){
   this.resultCheck=!this.resultCheck;
  }

  ngOnInit() {
    this.resultDataAll=this._resultServie.resultDataAll();

    //title code here
    this._title.setTitle(this.title);
  }

}
