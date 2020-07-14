import {Component} from '@angular/core';
import {BaseElement} from '../base-element';
import {FieldRadio} from '../../model/form/control/field-radio';

@Component({
  selector: 'md-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent extends BaseElement<FieldRadio> {
  constructor() {
    super();
  }

  get control() {
    return this.group.get(this.field.name);
  }

  get showError() {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }
}
