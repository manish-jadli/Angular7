import { Pipe, PipeTransform } from '@angular/core';
import { ISchoolAddress } from '../school-address';


@Pipe({
  name: 'schaddrlist'
})
export class SchaddrlistPipe implements PipeTransform {

  transform(value: ISchoolAddress[], filterBy: string): ISchoolAddress[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((schoolAddress: ISchoolAddress) =>
      schoolAddress.address_id.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
