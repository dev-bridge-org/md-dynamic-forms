import {AbstractControl, FormGroup, Validators} from '@angular/forms';
import {BaseField} from '../model/form/base-field';
import {Component} from '@angular/core';
import {FieldInput} from '../model/form/control/field-input';
import {BaseElementComponent} from './base-element.component';

@Component({template: ''})
export class BaseInputComponent<T extends FieldInput> extends BaseElementComponent<T>{
  get required() {
    return this.field.validations.find((validation) => validation.validator === Validators.required) !== undefined;
  }
}
