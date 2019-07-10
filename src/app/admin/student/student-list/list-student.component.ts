import { Component, OnInit, TemplateRef, OnChanges , SimpleChanges} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../student';
import { Title } from '@angular/platform-browser';
import { CreateStudentComponent } from '../create-student.component';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit, OnChanges {
  public students = [];
  public listFilter: string = '';
  public grid: boolean;
  public user: string;
  public girl: string;
  item: any;
  public title = 'Student List';
  bsModalRef: BsModalRef;


  addStudentModal() {
    alert('Sorry popup is not open');
  }




  //edit method code
  editStudent(student_id: any, index: number) {
    alert('You have redirect to main home page.');
    this._router.navigate(['/admin/create-student', student_id]);
   this.ngOnInit();
  }

  editButtonClick(student_id: string) {
    this._router.navigate(['/admin/edit', student_id]);
  }
  //end

     //delete method code
     deleteStudent(student_id: any, index: number) {
      this._studentService.deleteStudent(student_id).subscribe(response => {
        this.students.splice(index, 1);
      });
    }
    //end


  constructor(private _studentService: StudentService, private _router: Router, private _http: HttpClient,
     private _route: ActivatedRoute, private _title: Title, private modalService: BsModalService) {
    this.user = 'assets/user.png';
    this.girl = 'assets/girl.png';
  }

  //grid code here
  gridClick() {
    this.grid = true;
  }
  //end

  //view code here
  viewClick() {
    this.grid = false;
  }
  //end

  //call by id base routing
  onClick(student_id: string) {
    this._router.navigate(['/admin/list-student-detail', student_id]);
  }
  //end

  // addAnother(){
  //   this._router.navigate(['/admin']);
  // }

  ngOnInit() {

     //get data from sql server
     this._studentService.getStudent()
     .subscribe((data) => this.students = data)
     //end

     //grid is open code first time
     this.grid = true;
     //end

    //title code here
    this._title.setTitle(this.title);
   }
   //end

   ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
   }

   //deeep copy of students store in studentsData
    studentsData = Object.assign({}, this.students);
    //end
  }

