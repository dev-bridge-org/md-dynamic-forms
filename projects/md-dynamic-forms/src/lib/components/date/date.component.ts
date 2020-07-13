import {Component} from '@angular/core';
import {BaseElement} from '../base-element';
import {FieldDatepicker} from '../../model/form/control/field-datepicker';

@Component({
  selector: 'md-date',
  template: `
      <mat-form-field class="demo-full-width margin-top" [formGroup]="group">
        <input matInput [matDatepicker]="picker" [formControlName]="field.name" [placeholder]="field.label">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
        <mat-hint></mat-hint>
        <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
            <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
        </ng-container>
      </mat-form-field>
  `,
  styles: []
})
export class DateComponent extends BaseElement<FieldDatepicker> {
  constructor() {
    super();
  }
}
