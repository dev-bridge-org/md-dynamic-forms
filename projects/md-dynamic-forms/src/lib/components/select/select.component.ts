import {Component} from '@angular/core';
import {BaseElement} from '../base-element';

@Component({
  selector: 'md-select',
  template: `
      <mat-form-field class="demo-full-width margin-top" [formGroup]="group">
          <mat-select [placeholder]="field.label" [formControlName]="field.name">
              <mat-option *ngFor="let item of field.options" [value]="item">{{item}}</mat-option>
          </mat-select>
      </mat-form-field>
  `,
  styles: []
})
export class SelectComponent extends BaseElement {
  constructor() {
    super();
  }
}
