import { Pipe, PipeTransform } from '@angular/core';
import { IStudentReport } from '../student-report';

@Pipe({
  name: 'replist'
})
export class ReplistPipe implements PipeTransform {

  transform(value: IStudentReport[], filterBy: string): IStudentReport[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((studentReports: IStudentReport) =>
    studentReports.report_id.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
