import { Routes } from '@angular/router';
import { CreateStudentComponent } from './student/create-student.component';
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
// tslint:disable-next-line: max-line-length
import { SchoolAddressListDetailComponent } from './school/school-address/school-address-list/school-address-list-detail/school-address-list-detail.component';
import { SubjectListDetailComponent } from './student/student-subject/subject-list/subject-list-detail/subject-list-detail.component';
// tslint:disable-next-line: max-line-length
import { StudentAddressListDetailComponent } from './student/student-address/student-address-list/student-address-list-detail/student-address-list-detail.component';
import { SchoolListDetailComponent } from './school/school-list/school-list-detail/school-list-detail.component';
import { StudentListActivatorService } from './student/student-list/student-list-activator.service';
import { ErrorPageComponent } from './error-page/error-page.component';

export const adminRoutes: Routes = [
    { path: '', component: CreateStudentComponent, canDeactivate: ['canDeactivateCreateStudent'] },
    {path: 'list-student', component: ListStudentComponent},
    {path: 'list-student-detail/:student_id', component: StudentRedirectComponent, canActivate: [StudentListActivatorService]},
    {path: 'school-address', component: SchoolAddressComponent},
    {path: 'school-address-list', component: SchoolAddressListComponent},
    {path: 'school-address-list-detail/:address_id', component: SchoolAddressListDetailComponent},
    {path: 'student-subject', component: StudentSubjectComponent},
    {path: 'subject-list', component: SubjectListComponent},
    {path: 'subject-list-detail', component: SubjectListDetailComponent},
    {path: 'student-fee', component: StudentFeeComponent},
    {path: 'student-fee-list', component: StudentFeeListComponent},
    {path: 'student-fee-list-detail/:student_id', component: StudentFeeListDetailComponent},
    {path: 'student-class', component: StudentClassComponent},
    {path: 'studentClass-list', component: StudentClassListComponent},
    {path: 'studentClass-list-detail/:student_id', component: StudentClassListDetailComponent},
    {path: 'student-address', component: StudentAddressComponent},
    {path: 'studentAddress-list', component: StudentAddressListComponent},
    {path: 'studentAddress-list-detail/:student_id', component: StudentAddressListDetailComponent},
    {path: 'student-report', component: StudentReportComponent},
    {path: 'student-report-list', component: StudentReportListComponent},
    {path: 'student-report-list-detail/:report_id', component: StudentReportListDetailComponent},
    {path: 'teacher', component: TeacherComponent},
    {path: 'teacher-list', component: TeacherListComponent},
    {path: 'teacher-list-detail/:teacher_id', component: TeacherListDetailComponent},
    {path: 'school', component: SchoolComponent},
    {path: 'school-list', component: SchoolListComponent},
    {path: 'school-list-detail/:school_id', component: SchoolListDetailComponent },
    {path: '404', component: ErrorPageComponent},
    {path: '**', component: ErrorPageComponent}
];
