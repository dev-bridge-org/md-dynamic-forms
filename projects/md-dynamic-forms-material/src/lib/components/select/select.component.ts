import {Component} from '@angular/core';
import {NGXLogger} from 'ngx-logger';
import {BaseSelect} from 'md-dynamic-forms-core';

@Component({
  selector: 'md-select',
  template: `
    <mat-form-field class="demo-full-width margin-top" [formGroup]="group">
      <mat-select [placeholder]="field.label" [formControlName]="field.name">
        <mat-option *ngFor="let item of options | async" [value]="item">{{field.display(item) | async}}</mat-option>
      </mat-select>
      <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
      </ng-container>
    </mat-form-field>
  `,
  styles: []
})
export class SelectComponent extends BaseSelect {

  constructor(private logger: NGXLogger) {
    super();
  }
}
