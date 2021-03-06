import {Component} from '@angular/core';
import {BaseInputComponent, FieldDatepicker} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-datepicker',
  templateUrl: './datepicker.component.html',
  styles: []
})
export class DatepickerComponent extends BaseInputComponent<FieldDatepicker> {
  constructor() {
    super();
  }
}
