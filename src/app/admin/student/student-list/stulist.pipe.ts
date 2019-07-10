import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from '../student';

@Pipe({
  name: 'stulist'
})
export class StulistPipe implements PipeTransform {


  transform(value: IStudent[], filterBy: string): IStudent[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((students: IStudent) =>
      students.student_id.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }


}
