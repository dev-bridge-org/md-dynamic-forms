import { Component } from '@angular/core';
import {BaseInputComponent, FieldDatepicker} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-clarity-datepicker',
  templateUrl: './clarity-datepicker.component.html',
  styleUrls: ['./clarity-datepicker.component.css']
})
export class ClarityDatepickerComponent extends BaseInputComponent<FieldDatepicker> {}
