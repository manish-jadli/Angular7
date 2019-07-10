import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentFeeService } from './student-fee.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-student-fee',
  templateUrl: './student-fee.component.html',
  styleUrls: ['./student-fee.component.css']
})
export class StudentFeeComponent implements OnInit {
  studentFeesForm: FormGroup;
  public studentFeeDetail = [];
  public title='Student Fee';

  //paymode=['Offline','Online'];
  //subject=['Science','Arts','Commerce','B.com','B.A','LLB','Polytechnic','B.Tech','MSC','BSC','MCA','MBA','M.TECH'];
  //class=['Primary','Nersurry','LKG','UKG','First','Second','Third','Fourth','Fivth','Six','Seven','Eight','Nine','High School','Eleventh','Intermediate','P.G','U.G'];
  //active=['True','False'];
  constructor(private _studentFeeService: StudentFeeService,
     private _router: Router, private _http: HttpClient,
     private _title:Title, private toastr:ToastrService) { }

  ngOnInit() {

    //get data from sql server
    this.studentFeesForm = new FormGroup({
      student_id: new FormControl(),
      first_name: new FormControl(),
      middle_name: new FormControl(),
      last_name: new FormControl(),
      gender: new FormControl(),
      class: new FormControl(),
      subject: new FormControl(),
      payment_mode: new FormControl(),
      fees: new FormControl(),
      tution_fee: new FormControl(),
      library_fee: new FormControl(),
      game_fee: new FormControl(),
      paneltie_fees: new FormControl(),
      other_fee: new FormControl(),
      IsActive: new FormControl()
    })
    this._studentFeeService.getStudentFee()
      .subscribe((data) => this.studentFeeDetail = data);
    //end

    //title code here
    this._title.setTitle(this.title);
  }


  //post data from sql server
  postStudentFee() {
    if(this.studentFeesForm.valid){
      this._http.post(`http://localhost:56843/api/PaymentFee/`,
      {
        student_id: this.studentFeesForm.value.student_id,
        first_name: this.studentFeesForm.value.first_name,
        middle_name: this.studentFeesForm.value.middle_name,
        last_name: this.studentFeesForm.value.last_name,
        gender: this.studentFeesForm.value.gender,
        class: this.studentFeesForm.value.class,
        subject: this.studentFeesForm.value.subject,
        payment_mode: this.studentFeesForm.value.payment_mode,
        fees: this.studentFeesForm.value.fees,
        tution_fee: this.studentFeesForm.value.tution_fee,
        library_fee: this.studentFeesForm.value.library_fee,
        game_fee: this.studentFeesForm.value.game_fee,
        paneltie_fees: this.studentFeesForm.value.paneltie_fees,
        other_fee: this.studentFeesForm.value.other_fee,
        IsActive: this.studentFeesForm.value.IsActive

      })
      .subscribe(
        (data: any) => {
          console.log(data)
        }
    )
    this.studentFeesForm.reset();
      this.toastr.success('GIC KOTDWARA','Student fee form submitted Successfully.');
    }else{
      this.toastr.success('GIC KOTDWARA','You are not filled correctly. Please try again later.');
    }
  
  }
  //end

  //update sql server code
  updateStudentFee() {
  if(this.studentFeesForm.valid){
    this._http.put('http://localhost:56843/api/PaymentFee?student_id=' + this.studentFeesForm.value.student_id,
    {
      student_id: this.studentFeesForm.value.student_id,
      first_name: this.studentFeesForm.value.first_name,
      middle_name: this.studentFeesForm.value.middle_name,
      last_name: this.studentFeesForm.value.last_name,
      gender: this.studentFeesForm.value.gender,
      class: this.studentFeesForm.value.class,
      subject: this.studentFeesForm.value.subject,
      payment_mode: this.studentFeesForm.value.payment_mode,
      fees: this.studentFeesForm.value.fees,
      tution_fee: this.studentFeesForm.value.tution_fee,
      library_fee: this.studentFeesForm.value.library_fee,
      game_fee: this.studentFeesForm.value.game_fee,
      paneltie_fees: this.studentFeesForm.value.paneltie_fees,
      other_fee: this.studentFeesForm.value.other_fee,
      IsActive: this.studentFeesForm.value.IsActive

    })
    .subscribe(
      (data: any) => {
        console.log(data)
      }
  )
  this.studentFeesForm.reset();
  this.toastr.success('GIC KOTDWARA','Student fee updated Successfully.');
  }else{
    this.toastr.error('GIC KOTDWARA','You are not filled correctly. Please try again later.');
  }

    //end
  }
  //end


  //load data code
  onLoadFeesDataClick(){
   this.studentFeesForm.setValue({
   student_id:'MAN012345',
   first_name:'Manish',
   middle_name:'',
   last_name:'Jadli',
   class:'Post Graduate',
   subject:'Commerce',
   payment_mode:'Online',
   fees:'25000',
   tution_fee:'0.00',
   library_fee:'0.00',
   game_fee:'0.00',
   paneltie_fees:'0.00',
   other_fee:'0.00',
   gender:'Male',
   IsActive:'True' 
    })
  }
  //end

  onSubmit() {
    console.log(this.studentFeesForm.value);
  }

  viewStudentFee() {
    this._router.navigate(['/admin/student-fee-list']);
  }

}
