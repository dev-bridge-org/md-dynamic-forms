import { Component, OnInit } from '@angular/core';
import {FieldConfig} from '@lib/model/field-config.interface';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'md-list',
  template: `
      <ol>
          <li *ngFor="let item of getFormArray(group.get(field.name)).getRawValue()">{{item | json}}</li>
      </ol>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }


  getFormArray(control: AbstractControl): FormArray {
    return control as FormArray;
  }
}
