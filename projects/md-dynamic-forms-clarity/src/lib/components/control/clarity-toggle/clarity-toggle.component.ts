import { Component } from '@angular/core';
import {BaseElementComponent, FieldSwitch} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-clarity-toggle',
  templateUrl: './clarity-toggle.component.html',
  styleUrls: ['./clarity-toggle.component.css']
})
export class ClarityToggleComponent extends BaseElementComponent<FieldSwitch> {}
