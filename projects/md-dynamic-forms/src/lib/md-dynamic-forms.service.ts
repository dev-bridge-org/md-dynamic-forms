import {Injectable} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Validator} from './model/validation/validator.interface';
import {AsyncValidator} from './model/validation/async-validator.interface';
import {FieldGroup} from './model/form/group/field-group';
import {FieldArray} from './model/form/array/field-array';
import {BaseField} from './model/form/base-field';

@Injectable({
  providedIn: 'root'
})
export class MdDynamicFormsService {

  constructor(private fb: FormBuilder) { }

  createGroup(config: FieldGroup, value: any): FormGroup {
    const group = this.fb.group({});
    config.children.forEach(field => {
      // if (field.type === 'button') {
      //   return;
      // }
      let control = null;
      switch (field.typeOfFormField) {
        case 'group':
          control = this.createGroup(field as FieldGroup, value ? value[field.name] : null);
          break;
        case 'array':
          control = this.createArray(field as FieldArray, value ? value[field.name] : null);
          break;
        case 'control':
          control = this.createControl(field, value ? value[field.name] : null);
          break;
      }
      group.addControl(field.name, control);
    });
    group.setValidators(this.bindValidations(config.validations || []));
    group.setAsyncValidators(this.bindAsyncValidations(config.asyncValidations || []));
    return group;
  }

  createArray(config: FieldArray, value: any): FormArray {
    const array = this.fb.array([]);
    for (const item of value) {
      const group = this.createGroup(config.listItem, item);
      array.push(group);
    }
    array.setValidators(this.bindValidations(config.validations || []));
    array.setAsyncValidators(this.bindAsyncValidations(config.asyncValidations || []));
    return array;
  }

  createControl(config: BaseField, value: any): FormControl {
    return this.fb.control(
      value,
      this.bindValidations(config.validations || []),
      this.bindAsyncValidations(config.asyncValidations || [])
    );
  }

  private bindValidations(validations: Validator[]): ValidatorFn {
    if (validations.length > 0) {
      const validList = validations.map((validation) => validation.validator);
      return Validators.compose(validList);
    }
    return null;
  }

  private bindAsyncValidations(validations: AsyncValidator[]) {
    if (validations.length > 0) {
      return validations.map((value) => value.validator);
    }
    return null;
  }
}
