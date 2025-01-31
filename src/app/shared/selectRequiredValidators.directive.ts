import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector:'[appSelectorValidators]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:SelectRequiredValidatorDirective,
        multi:true
    }]
})
export class SelectRequiredValidatorDirective implements Validator{
    @Input () appSelectValidator:string;
    validate(control:AbstractControl): {[key:string]:any} | null{
       return control.value === this.appSelectValidator ? {'defaultSelector':true}:null;
    }
}