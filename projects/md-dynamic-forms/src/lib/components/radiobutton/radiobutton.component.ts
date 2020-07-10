import {Component} from '@angular/core';
import {BaseElement} from '../base-element';

@Component({
  selector: 'md-radiobutton',
  template: `
      <div class="demo-full-width margin-top" [formGroup]="group">
          <label class="radio-label-padding">{{field.label}}:</label>
          <mat-radio-group [formControlName]="field.name">
              <mat-radio-button *ngFor="let item of field.options" [value]="item">{{item}}</mat-radio-button>
          </mat-radio-group>
      </div>
  `,
  styles: []
})
export class RadiobuttonComponent extends BaseElement {
  constructor() {
    super();
  }
}
