import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sublist'
})
export class SublistPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
