import { Pipe, PipeTransform } from '@angular/core';
import { IStudentClass } from '../../student';

@Pipe({
  name: 'sclaslist'
})
export class SclaslistPipe implements PipeTransform {


  transform(value: IStudentClass[], filterBy: string): IStudentClass[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((studentsClass: IStudentClass) =>
      studentsClass.class_id.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }


}
