import {Component} from '@angular/core';
import {BaseInputComponent, FieldCheckbox} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent extends BaseInputComponent<FieldCheckbox> {
  constructor() {
    super();
  }

  get canShowError(): boolean {
    return this.control.invalid && (this.control.touched || this.control.dirty);
  }
}
