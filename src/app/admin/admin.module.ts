import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';


import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.route';
import { ListStudentComponent } from './student/student-list/list-student.component';
import { StudentRedirectComponent } from './student/student-list/student-redirect/student-redirect.component';
import { SchoolAddressComponent } from './school/school-address/school-address.component';
import { SchoolAddressListComponent } from './school/school-address/school-address-list/school-address-list.component';
import { StudentSubjectComponent } from './student/student-subject/student-subject.component';
import { SubjectListComponent } from './student/student-subject/subject-list/subject-list.component';
import { StudentFeeComponent } from './student-fee/student-fee.component';
import { StudentFeeListComponent } from './student-fee/student-fee-list/student-fee-list.component';
import { StudentFeeListDetailComponent } from './student-fee/student-fee-list/student-fee-list-detail/student-fee-list-detail.component';
import { SchoolListComponent } from './school/school-list/school-list.component';
import { SchoolComponent } from './school/school.component';
import { TeacherListDetailComponent } from './teacher/teacher-list/teacher-list-detail/teacher-list-detail.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherComponent } from './teacher/teacher.component';
// tslint:disable-next-line: max-line-length
import { StudentReportListDetailComponent } from './student/student-report/student-report-list/student-report-list-detail/student-report-list-detail.component';
import { StudentReportListComponent } from './student/student-report/student-report-list/student-report-list.component';
import { StudentReportComponent } from './student/student-report/student-report.component';
import { StudentAddressListComponent } from './student/student-address/student-address-list/student-address-list.component';
import { StudentAddressComponent } from './student/student-address/student-address.component';
// tslint:disable-next-line: max-line-length
import { StudentClassListDetailComponent } from './student/student-class/student-class-list/student-class-list-detail/student-class-list-detail.component';
import { StudentClassListComponent } from './student/student-class/student-class-list/student-class-list.component';
import { StudentClassComponent } from './student/student-class/student-class.component';
import { StulistPipe } from './student/student-list/stulist.pipe';
import { SclaslistPipe } from './student/student-class/student-class-list/sclaslist.pipe';
import { SaddrlistPipe } from './student/student-address/student-address-list/saddrlist.pipe';
import { SchaddrlistPipe } from './school/school-address/school-address-list/schaddrlist.pipe';
import { SflistPipe } from './student-fee/student-fee-list/sflist.pipe';
import { TlistPipe } from './teacher/teacher-list/tlist.pipe';
import { SublistPipe } from './student/student-subject/subject-list/sublist.pipe';
import { ReplistPipe } from './student/student-report/student-report-list/replist.pipe';
import { SlistPipe } from './school/school-list/slist.pipe';
import { AdminComponent } from './admin.component';
import { StudentFamiliesComponent } from './student/student-families/student-families.component';
// tslint:disable-next-line: max-line-length
import { StudentAddressListDetailComponent } from './student/student-address/student-address-list/student-address-list-detail/student-address-list-detail.component';
import { SubjectListDetailComponent } from './student/student-subject/subject-list/subject-list-detail/subject-list-detail.component';
// tslint:disable-next-line: max-line-length
import { SchoolAddressListDetailComponent } from './school/school-address/school-address-list/school-address-list-detail/school-address-list-detail.component';
import { SchoolListDetailComponent } from './school/school-list/school-list-detail/school-list-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CreateStudentComponent } from './student/create-student.component';
import { StudentListActivatorService } from './student/student-list/student-list-activator.service';




@NgModule({
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forChild(adminRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
      ListStudentComponent,
      StudentClassComponent,
      StudentClassListComponent,
      StudentClassListDetailComponent,
      StudentAddressComponent,
      StudentAddressListComponent,
      StudentRedirectComponent,
      SchoolAddressComponent,
      SchoolAddressListComponent,
      StudentSubjectComponent,
      SubjectListComponent,
      StudentFeeComponent,
      StudentFeeListComponent,
      StudentFeeListDetailComponent,
      SchoolListComponent,
      SchoolComponent,
      TeacherListDetailComponent,
      TeacherListComponent,
      TeacherComponent,
      StudentReportListDetailComponent,
      StudentReportListComponent,
      StudentReportComponent,
      StulistPipe,
      SclaslistPipe,
      SaddrlistPipe,
      SchaddrlistPipe,
      SflistPipe,
      TlistPipe,
      SublistPipe,
      ReplistPipe,
      SlistPipe,
      AdminComponent,
      StudentFamiliesComponent,
      StudentAddressListDetailComponent,
      SubjectListDetailComponent,
      SchoolAddressListDetailComponent,
      SchoolListDetailComponent,
      ErrorPageComponent,
      CreateStudentComponent
],
providers: [StudentListActivatorService, {provide: 'canDeactivateCreateStudent', useValue: checkDirtyState}]
 })

export class AdminModule { }
function checkDirtyState(component: CreateStudentComponent) {
  if (component.isDirty) {
  return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  return true;
}
