import {Component} from '@angular/core';
import {BaseElement} from '../base-element';

@Component({
  selector: 'md-checkbox',
  template: `
      <div class="demo-full-width margin-top" [formGroup]="group">
          <mat-checkbox [formControlName]="field.name">{{field.label}}</mat-checkbox>
      </div>
  `,
  styles: []
})
export class CheckboxComponent extends BaseElement {
  constructor() {
    super();
  }
}
