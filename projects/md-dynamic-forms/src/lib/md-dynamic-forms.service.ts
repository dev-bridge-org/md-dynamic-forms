import { Injectable } from '@angular/core';
import {FieldConfig} from './model/field-config.interface';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Validator} from './model/validator.interface';
import {AsyncValidator} from './model/async-validator.interface';

@Injectable({
  providedIn: 'root'
})
export class MdDynamicFormsService {

  constructor(private fb: FormBuilder) { }

  createGroup(config: FieldConfig, value: any): FormGroup {
    const group = this.fb.group({});
    config.children.forEach(field => {
      if (field.type === 'button') {
        return;
      }
      let control = null;
      switch (field.formType) {
        case 'group':
          control = this.createGroup(field, value[field.name]);
          break;
        case 'array':
          control = this.createArray(field, value[field.name]);
          break;
        case 'control':
          control = this.createControl(field, value[field.name]);
          break;
      }
      group.addControl(field.name, control);
    });
    group.setValidators(this.bindValidations(config.validations || []));
    group.setAsyncValidators(this.bindAsyncValidations(config.asyncValidations || []));
    return group;
  }

  createArray(config: FieldConfig, value: any): FormArray {
    const array = this.fb.array([]);
    for (const item of value) {
      const group = this.createGroup(config.listItem, item);
      array.push(group);
    }
    array.setValidators(this.bindValidations(config.validations || []));
    array.setAsyncValidators(this.bindAsyncValidations(config.asyncValidations || []));
    return array;
  }

  createControl(config: FieldConfig, value: any): FormControl {
    return this.fb.control(
      value,
      this.bindValidations(config.validations || []),
      this.bindAsyncValidations(config.asyncValidations || [])
    );
  }

  bindValidations(validations: Validator[]): ValidatorFn {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  bindAsyncValidations(validations: AsyncValidator[]) {
    if (validations.length > 0) {
      return validations.map((value) => value.validator);
    }
    return null;
  }
}
