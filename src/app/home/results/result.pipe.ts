import { Pipe, PipeTransform } from '@angular/core';
import { IResult } from './result';

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  transform(value: IResult[], filterBy: string): IResult[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((item: IResult) =>
    item.username.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
