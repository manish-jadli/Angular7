import { Pipe, PipeTransform } from '@angular/core';
import { ISchool } from '../school';

@Pipe({
  name: 'slist'
})
export class SlistPipe implements PipeTransform {

  transform(value: ISchool[], filterBy: string): ISchool[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((schools: ISchool) =>
      schools.school_name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }


}
