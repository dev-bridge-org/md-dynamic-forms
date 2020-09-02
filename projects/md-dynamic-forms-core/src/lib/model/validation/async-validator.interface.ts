import {AsyncValidatorFn, ValidatorFn} from '@angular/forms';

export interface AsyncValidator {
  name: string;
  validator: AsyncValidatorFn;
  message: string;
}
