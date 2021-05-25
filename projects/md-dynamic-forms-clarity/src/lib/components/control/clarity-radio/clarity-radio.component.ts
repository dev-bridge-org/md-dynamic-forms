import { Component } from '@angular/core';
import {BaseSelectComponent, FieldRadio} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-clarity-radio',
  templateUrl: './clarity-radio.component.html',
  styleUrls: ['./clarity-radio.component.css']
})
export class ClarityRadioComponent extends BaseSelectComponent<FieldRadio> {}
