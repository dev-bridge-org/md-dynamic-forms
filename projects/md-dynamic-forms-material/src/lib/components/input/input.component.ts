import {Component} from '@angular/core';
import {BaseInputComponent, FieldInput} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-input',
  templateUrl: './input.component.html',
  styles: []
})
export class InputComponent extends BaseInputComponent<FieldInput> {
  constructor() {
    super();
  }
}
