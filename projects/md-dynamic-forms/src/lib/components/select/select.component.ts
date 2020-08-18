import {Component, OnInit} from '@angular/core';
import {BaseElement} from '../base-element';
import {FieldSelect} from '../../model/form/control/field-select';
import {NGXLogger} from 'ngx-logger';
import {distinct, tap} from 'rxjs/operators';

@Component({
  selector: 'md-select',
  template: `
    <mat-form-field class="demo-full-width margin-top" [formGroup]="group">
      <mat-select [placeholder]="field.label" [formControlName]="field.name">
        <mat-option *ngFor="let item of options | async" [value]="item">{{item}}</mat-option>
      </mat-select>
      <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
      </ng-container>
    </mat-form-field>
  `,
  styles: []
})
export class SelectComponent extends BaseElement<FieldSelect> {
  constructor(private logger: NGXLogger) {
    super();
  }

  get options() {
    return this.field.options(...this.optionParameters)
      .pipe(
        tap(options => {
          if (options.indexOf(this.control.value) === -1) {
            this.control.patchValue(null);
          }
        })
      );
  }

  get optionParameters() {
    return this.dependencyControls.map(control => control.value);
  }
}
