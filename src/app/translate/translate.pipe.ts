// app/translate/translate.pipe.ts

import { PipeTransform, Pipe } from '@angular/core';
import { TranslateService } from '../translate';

@Pipe({
    name:'translate',
    pure:false
})
export class TranslatePipe implements PipeTransform{
    constructor(private _translate:TranslateService){}
    
    transform(value:string, args:string | string[]):any{
if(!value) return;
return this._translate.instant(value, args);
    }
}
