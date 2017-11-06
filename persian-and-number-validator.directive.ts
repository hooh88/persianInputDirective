import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
  selector: '[appPersianAndNumberValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PersianAndNumberValidatorDirective,
      multi: true
    }
  ]
})
export class PersianAndNumberValidatorDirective {

  constructor() { }
  validate(element: AbstractControl): { [key: string]: any } {
    const PersianRegex = /^[\u0600-\u06FF,\u0590-\u05FF,0-9\s]*$/;
    const valid = PersianRegex.test(element.value);
    return valid ? null : { appPersianAndNumberValidator: true };
  }

}
