import {Component} from '@angular/core';
import {BaseElementComponent, FieldSwitch} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent extends BaseElementComponent<FieldSwitch>{
  get canShowError(): boolean {
    return this.control.invalid && (this.control.touched || this.control.dirty);
  }
}
