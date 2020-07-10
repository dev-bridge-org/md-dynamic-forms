import {Component} from '@angular/core';
import {BaseElement} from '../base-element';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'md-checkbox',
  template: `
      <div class="demo-full-width margin-top" [formGroup]="group">
        <mat-checkbox [formControlName]="field.name">{{field.label}}</mat-checkbox>
        <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
          <mat-error *ngIf="control.hasError(validation.name) && control.touched">{{validation.message}}</mat-error>
        </ng-container>
      </div>
  `,
  styles: []
})
export class CheckboxComponent extends BaseElement {
  constructor() {
    super();
  }

  get control(): FormControl {
    return this.group.get(this.field.name) as FormControl;
  }
}
