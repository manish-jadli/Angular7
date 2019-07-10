import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myInterval = 1500;
  activeSlideIndex = 0;
  public GICKotdwara: string;
  public school1: string;
  public school2: string;
  public school3: string;
  public title='Home';
 
  slides = [
    {image: 'assets/schoolImg/school1.jpg'},
    {image: 'assets/schoolImg/school2.JPG'},
    {image: 'assets/schoolImg/school3.jpg'}
  ];

  constructor(private _title:Title) {
    this.GICKotdwara = 'GIC Kotdwara';
    this.school1 = 'assets/schoolImg/school1.jpg';
    this.school2 = 'assets/schoolImg/school2.JPG';
    this.school3 = 'assets/schoolImg/school3.jpg';
   }


  ngOnInit() {
    //title code here
    this._title.setTitle(this.title);
 }
  //end
  }
