import { Component } from '@angular/core';
import {BaseElementComponent, FieldSlider} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-clarity-range',
  templateUrl: './clarity-range.component.html',
  styleUrls: ['./clarity-range.component.css']
})
export class ClarityRangeComponent extends BaseElementComponent<FieldSlider> {}
