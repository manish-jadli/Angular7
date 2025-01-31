import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core'

@Directive({
 selector:'[appCofirmPassword]',
 providers:[{
    provide:NG_VALIDATORS,
    useExisting:ConfirmPasswordDirective,
    multi:true
 }]
})

export class ConfirmPasswordDirective implements Validator{
    @Input() appCofirmPassword:string;
    validate(control:AbstractControl):{[key:string]:any} | null{
        const controlToCompare=control.parent.get(this.appCofirmPassword);
        if(controlToCompare && controlToCompare.value !=control.value){
            return {'notEqual':true};
        }
        return null;
    }
}