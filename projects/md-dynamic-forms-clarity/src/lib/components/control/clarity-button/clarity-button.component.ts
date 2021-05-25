import { Component } from '@angular/core';
import {BaseElementComponent, BaseFieldControl} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-clarity-button',
  templateUrl: './clarity-button.component.html',
  styleUrls: ['./clarity-button.component.css']
})
export class ClarityButtonComponent extends BaseElementComponent<BaseFieldControl> {}
