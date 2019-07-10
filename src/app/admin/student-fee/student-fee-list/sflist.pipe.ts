import { Pipe, PipeTransform } from '@angular/core';
import { IStudentFee } from '../student-fee';

@Pipe({
  name: 'sflist'
})
export class SflistPipe implements PipeTransform {


  transform(value: IStudentFee[], filterBy: string): IStudentFee[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((studentFeeList: IStudentFee) =>
      studentFeeList.student_id.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
