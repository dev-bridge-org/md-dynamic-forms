import {Component} from '@angular/core';
import {BaseElementComponent, FieldInput} from 'md-dynamic-forms-core';
import {Validators} from '@angular/forms';

@Component({
  selector: 'md-input',
  templateUrl: './input.component.html',
  styles: []
})
export class InputComponent extends BaseElementComponent<FieldInput> {
  constructor() {
    super();
  }

  get required() {
    return  this.field.validations.find((validation) => validation.validator === Validators.required) !== undefined;
  }
}
