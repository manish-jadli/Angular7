import { Component, OnInit } from '@angular/core';
import { SchoolAddressService } from '../school-address.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-school-address-list',
  templateUrl: './school-address-list.component.html',
  styleUrls: ['./school-address-list.component.css']
})
export class SchoolAddressListComponent implements OnInit {
  schoolAddressForm: FormGroup;
  public schoolAddress = [];
  public listFilter: string = '';
  public grid: boolean;
  public title = 'School Address List';
  public user: string;

  constructor(private _schoolAddressService: SchoolAddressService,
     private _router: Router, private _title: Title, private _http: HttpClient) {
    this.user = 'assets/book1.png';
  }

  selectedFile : File = null;

  onFileSelected(event: any){
    this.selectedFile = <File> event.target.files[0];

  }
  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name );
    this._http.put('http://localhost:56843/api/schoolAddress/' + this.schoolAddressForm.value.address_id, this.selectedFile, {
      address_id: this.schoolAddressForm.value.address_id,
      img: this.schoolAddressForm.value.img
  })
    .subscribe(res => {
      console.log(res);
    });
  }

  //grid code here
  gridClick(){
    this.grid = true;
  }
  //end

  //view code here
  viewClick(){
    this.grid = false;
  }
  //end


  ngOnInit() {

     //get data from sql server
     this._schoolAddressService.getSchoolAddress()
     .subscribe((data) => this.schoolAddress = data);
   //end

       //grid is open code first time
       this.grid = true;
       //end

       this.schoolAddressForm = new FormGroup({
        img: new FormControl(),
        address_id: new FormControl()
      });

       //title code here
        this._title.setTitle(this.title);
  }

     //delete method code
     deleteSchoolAddress(address_id: any, index: number){
      this._schoolAddressService.deleteSchoolAddress(address_id).subscribe(response => {
        this.schoolAddress.splice(index, 1);
      });
    }
  //end

  onClick(address_id: string){
    this._router.navigate(['admin/school-address-list-detail', address_id]);
  }

}
