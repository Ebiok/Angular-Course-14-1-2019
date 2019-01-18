import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function allowedCourseCodeValidator(allowedCourseCodeRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {  
    const allowed = allowedCourseCodeRe.test(control.value);
    return (!allowed) ? {'allowedCourseCode': {value: control.value}} : null;
  }
}

@Directive({
  selector: '[allowedCourseCode][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: AllowedCourseCodesDirective, multi: true}]
})
export class AllowedCourseCodesDirective implements Validator {
  @Input() allowedCourseCode: string;
  validate(control: AbstractControl): {[key: string]: any} {
    return this.allowedCourseCode ? allowedCourseCodeValidator(new RegExp(this.allowedCourseCode, 'i'))(control) : null;
  }
}
