import {Component} from '@angular/core';
import {BaseSelectComponent, FieldRadio} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent extends BaseSelectComponent<FieldRadio> {
  constructor() {
    super();
  }
  get canShowError(): boolean {
    return this.control.invalid && (this.control.touched || this.control.dirty);
  }
}
