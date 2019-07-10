import { Pipe, PipeTransform } from '@angular/core';
import { ITeacher } from '../tacher';

@Pipe({
  name: 'tlist'
})
export class TlistPipe implements PipeTransform {

  transform(value: ITeacher[], filterBy: string): ITeacher[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((teachers: ITeacher) =>
      teachers.teacher_id.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
