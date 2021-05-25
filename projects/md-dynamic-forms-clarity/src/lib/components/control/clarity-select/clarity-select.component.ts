import { Component } from '@angular/core';
import {BaseSelectComponent, FieldSelect} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-clarity-select',
  templateUrl: './clarity-select.component.html',
  styleUrls: ['./clarity-select.component.css']
})
export class ClaritySelectComponent extends BaseSelectComponent<FieldSelect> {}
