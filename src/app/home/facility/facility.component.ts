import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  public activeGam: boolean;
  public activeComp: boolean;
  public activeLib: boolean;
  public activeBus: boolean;
  public title='Facility';

  busClick() {
    this.activeBus = !this.activeBus;
  }
  libraryClick() {
    this.activeLib = !this.activeLib;
  }
  gameClick() {
    this.activeGam = !this.activeGam;
  }
  competitonClick() {
    this.activeComp = !this.activeComp;
  }

  constructor(private _titile:Title) { }

  ngOnInit() {
    //title code here
    this._titile.setTitle(this.title);
  }

}
