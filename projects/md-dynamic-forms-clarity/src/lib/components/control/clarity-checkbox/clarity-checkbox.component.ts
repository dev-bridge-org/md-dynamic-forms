import { Component } from '@angular/core';
import {BaseInputComponent, FieldCheckbox} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-clarity-checkbox',
  templateUrl: './clarity-checkbox.component.html',
  styleUrls: ['./clarity-checkbox.component.css']
})
export class ClarityCheckboxComponent extends BaseInputComponent<FieldCheckbox> {}
