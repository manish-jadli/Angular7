import { Pipe, PipeTransform } from '@angular/core';
import { IStudentAddress } from '../../student';

@Pipe({
  name: 'saddrlist'
})
export class SaddrlistPipe implements PipeTransform {

  transform(value: IStudentAddress[], filterBy: string): IStudentAddress[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((studentAddress: IStudentAddress) =>
    studentAddress.student_id.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
