import { Component, OnInit } from '@angular/core';
import {BaseElementComponent, FieldSlider} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent extends BaseElementComponent<FieldSlider> {
  get canShowError(): boolean {
    return this.control.invalid && (this.control.touched || this.control.dirty);
  }
}
