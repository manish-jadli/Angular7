import { Component, OnInit } from '@angular/core';
import { Recipe } from './contact.modal';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm:FormGroup;
  public value=0;
  public title='Contact';

  recipes:Recipe[]=[
    new Recipe('Manish Jadli', 'This is simply a test','assets/user.png' ),
    new Recipe('Harish Jadli', 'This is simply a test','assets/user.png'),
    new Recipe('Girish Jadli', 'This is simply a test','assets/user.png'),
    new Recipe('Ganesh Jadli', 'This is simply a test','assets/user.png'),
    new Recipe('Amit Jadli', 'This is simply a test','assets/user.png'),
    new Recipe('Yash Jadli', 'This is simply a test','assets/user.png')

  ];
  constructor(private _fb:FormBuilder, private _title:Title) {

   }

   commentPost(){
     this.contactForm.setValue({
       username:'Ashok Nainthani',
       email:'ashoknaithani@gmail.com',
       comment:'Good for information website.'
     })
   }

   contact(){
     console.log(this.contactForm.value);
   }

   voteup(){
     this.value++;
   }
   votedown(){
     this.value--;
   }

  ngOnInit() {
    this.contactForm=this._fb.group({
      username:['',[Validators.required, Validators.maxLength(50)]],
      email:['',[Validators.required, Validators.maxLength(100)]],
      comment:['', [Validators.required, Validators.maxLength(200)]]
    })

    //title code here
    this._title.setTitle(this.title);
  }

}
